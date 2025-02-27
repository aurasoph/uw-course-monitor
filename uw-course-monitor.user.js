// ==UserScript==
// @name         UW Course Monitor (Auto-Refresh)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Refreshes and monitors course status
// @match        https://sdb.admin.uw.edu/timeschd/uwnetid/sln.asp?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const CHECK_INTERVAL = 10000; // Refreshes every 10 Seconds
    const TARGET_URL = 'https://sdb.admin.uw.edu/'; // Replace this link. This link should be the link that sends your registration information when you click "Send to Registration"
    const STATUS_PATTERN = '** Closed **';

    function checkAndRefresh() {
        const tables = document.querySelectorAll("table.main");

        if (tables.length < 2) {
            console.log("Unexpected HTML Format: Could not find the Enrollment Information Table.");
            return;
        }

        const rows = tables[1].querySelectorAll("tr");
        const timestamp = new Date().toISOString();

        if (rows.length <= 1) {
            console.log("Unexpected HTML Format: No enrollment data row found.");
            return;
        }

        const statusRow = rows[1];
        const statusCells = statusRow.querySelectorAll("td");

        if (statusCells.length <= 4) {
            console.log("Unexpected HTML Format: Status cell not found.");
            return;
        }

        const statusCell = statusCells[4];

        const currentStatus = statusCell.textContent.trim();
        console.log(`[${timestamp}] Status: "${currentStatus}" (Make sure that this matches the status cell)`);

        if (currentStatus !== STATUS_PATTERN) {
            console.log(`[${timestamp}] Opening registration portal...`);
            window.open(TARGET_URL, '_blank');
        }

        console.log(`[${timestamp}] Refreshing page...`);
        setTimeout(() => location.reload(), CHECK_INTERVAL);
    }


    // Initial check and setup refresh cycle
    console.log('Starting auto-refresh monitor...');
    checkAndRefresh();
})();
