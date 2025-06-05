function calculateWelds() {
    let weldSize = parseFloat(document.getElementById("weldSize").value); // Get weld length selection

    let parts = {
        leftLeg: parseFloat(document.getElementById("leftLeg").value) || 0,
        rightLeg: parseFloat(document.getElementById("rightLeg").value) || 0,
        topWeb: parseFloat(document.getElementById("topWeb").value) || 0,
        bottomWeb: parseFloat(document.getElementById("bottomWeb").value) || 0,
        bearingBar: parseFloat(document.getElementById("bearingBar").value) || 0,
        supportBar: parseFloat(document.getElementById("supportBar").value) || 0
    };

    let results = {};

    // Process leftLeg, rightLeg, topWeb, bottomWeb dynamically
    for (let key of ["leftLeg", "rightLeg", "topWeb", "bottomWeb"]) {
        let welds = 5;  // Default starting weld count
        let weldDist = (parts[key] - (welds * weldSize)) / (welds - 1 ); // Adjust spacing calculation
        // Ensure correct spacing calculations
        while (weldDist > 30) {
            welds += 2;  // Increase welds by 2 at a time if spacing is too large
            weldDist = (parts[key] - (welds * weldSize)) / (welds - 1);
        }

        // Ensure welds do not exceed part length
        while ((welds * weldSize) > parts[key]) {
            welds -= 2;
            weldDist = (parts[key] - (welds * weldSize)) / (welds -1);
        }

        if (welds > 0) {
            results[key] = `Welds: ${welds}, Distance between welds: ${weldDist.toFixed(4)} inches`; // Now formatted to 4 decimal places
        }
    }

    // Bearing bar calculations (always starts at 3 welds)
    let bearingWelds = 3;
    let bearingDist = (parts.bearingBar - (bearingWelds * weldSize)) / (bearingWelds - 1);

    while (bearingDist > 30) {
        bearingWelds += 1;
        bearingDist = (parts.bearingBar - (bearingWelds * weldSize)) / (bearingWelds - 1);
    }

    if (bearingWelds > 0) {
        results["bearingBar"] = `Welds: ${bearingWelds}, Distance between welds: ${bearingDist.toFixed(4)} inches`; // Formatting update
    }

    // Support bar calculations (always starts at 3 welds)
    let supportWelds = 3;
    let supportDist = (parts.supportBar - (supportWelds * weldSize)) / (supportWelds - 1);

    if (supportDist <= 9) {
        supportWelds -= 1;
    } else if (supportDist > 30) {
        while (supportDist > 30) {
            supportWelds += 2;
            supportDist = (parts.supportBar - (supportWelds * weldSize)) / (supportWelds - 1);
        }
    }

    if (supportWelds > 0) {
    results["supportBar"] = supportWelds < 3
        ? `Welds: ${supportWelds}`
        : `Welds: ${supportWelds}, Distance between welds: ${supportDist.toFixed(4)} inches`;
}

    // Display results
    document.getElementById("result").innerHTML = Object.entries(results)
        .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
        .join("<br>");
}