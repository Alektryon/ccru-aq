input.oninput = function() {
    setTimeout(function() {
        a = 0;

        if (input.value !== "")
            window.history.pushState('', '', '?' + "v=" + input.value);
        else
            window.history.pushState('', '', window.location.protocol + "//" + window.location.host + window.location.pathname);

        Object.keys(cipher).forEach(function(key) {
            a += ((input.value).split(key).length - 1) * cipher[key];
        });

        if (/\d/.test(input.value))
            a += ((input.value)).match(/\d+/g).map(Number).reduce(function(b, c) { return b + c; }, 0);

        result.innerHTML = a;

        // Function to count matches
        function countMatches(textset, countElement, matchElement) {
            let matchescount = 0;
            let outputmatch = "";
            let teststrval = 0;

            if (a !== 0) {
                for (let textpos = 0; textpos < textset.length; textpos++) {
                    let teststr = "";
                    teststrval = 0;
                    let offend = Math.min(textpos + 18, textset.length);

                    for (let offset = textpos; offset < offend; offset++) {
                        let testweight = 0;
                        let testword = textset[offset];

                        for (let subpos = 0; subpos < testword.length; subpos++) {
                            let testchar = testword.substring(subpos, subpos + 1);
                            if (typeof cipher[testchar] !== 'undefined') {
                                testweight += parseInt(cipher[testchar]);
                            } else if (testchar == parseInt(testchar)) {
                                testweight += parseInt(testchar);
                            }
                        }

                        if (parseInt(testword) == testword) {
                            testweight = parseInt(testword);
                        }

                        teststrval += testweight;
                        teststr = teststr ? teststr + " " + testword : testword;

                        if (teststrval == a) {
                            matchescount++;
                            outputmatch += "<li>" + teststr + "</li>";
                        }
                    }
                }
            }

            countElement.innerHTML = matchescount !== 0 ? matchescount : 0;
            matchElement.innerHTML = matchescount !== 0 ? outputmatch : "N/A";
        }

        // Check each checkbox and count matches
        if (document.getElementById("showidentity").checked) {
            countMatches(identity.split(" "), identitycount, identitymatch);
        }
        if (document.getElementById("showcthulhu").checked) {
            countMatches(cthulhu.split(" "), cthulhucount, cthulhumatch);
        }
        if (document.getElementById("showaxsys").checked) {
            countMatches(axsys.split(" "), axsyscount, axsysmatch);
        }
        if (document.getElementById("showatlantis").checked) {
            countMatches(atlantis.split(" "), atlantiscount, atlantismatch);
        }
        if (document.getElementById("showbarker").checked) {
            countMatches(barker.split(" "), barkercount, barkermatch);
        }
        if (document.getElementById("showsarkon").checked) {
            countMatches(sarkon.split(" "), sarkoncount, sarkonmatch);
        }
        if (document.getElementById("showcybergothic").checked) {
            countMatches(cybergothic.split(" "), cybergothiccount, cybergothicmatch);
        }
        if (document.getElementById("showpandemonium").checked) {
            countMatches(pandemonium.split(" "), pandemoniumcount, pandemoniummatch);
        }
    }, 666);
}

document.body.onload = function() {
    input.value = decodeURI(window.location.search).substring(3, 128);
    input.select();
    input.dispatchEvent(new Event('input'));
}
