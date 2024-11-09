// Save user data and redirect to the finance plan page
function generateFinancePlan() {
    const name = document.getElementById("name").value;
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);
    const savings = parseFloat(document.getElementById("savings").value);
    const riskTolerance = document.getElementById("riskTolerance").value;

    const financePlan = {
        name,
        advice: "",
        riskLevel: riskTolerance,
    };

    // Basic financial logic based on income and expenses
    if (income > expenses * 1.5) {
        financePlan.advice = "You're in a strong financial position! Consider high-growth investments.";
    } else if (income > expenses) {
        financePlan.advice = "Good financial health! Balanced investments can help you grow safely.";
    } else {
        financePlan.advice = "Try increasing savings first; low-risk investments are recommended.";
    }

    // Store financePlan in localStorage to pass it to the financePlan.html page
    localStorage.setItem("financePlan", JSON.stringify(financePlan));

    // Redirect to the finance plan page
    window.location.href = "financePlan.html";
}

// Display finance plan on the financePlan.html page
window.onload = function () {
    if (window.location.pathname.endsWith("financePlan.html")) {
        const planData = JSON.parse(localStorage.getItem("financePlan"));

        if (planData) {
            document.getElementById("planOutput").innerHTML = `
                <p><strong>Name:</strong> ${planData.name}</p>
                <p><strong>Risk Tolerance:</strong> ${planData.riskLevel}</p>
                <p><strong>Investment Advice:</strong> ${planData.advice}</p>
            `;
        }
    }
};
