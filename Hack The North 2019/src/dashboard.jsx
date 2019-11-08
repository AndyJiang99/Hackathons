	// Obtain the root
	const rootElement = document.getElementById('root');

	class LabelledAmount extends React.Component {
		render() {
			const {
				label,
				amount
			} = this.props;

			return (
				<div className="labelled-dollar-amount-container">
					<label className="amount-label">{label}</label>
					<div className="amount-container">
						<p className="amount">{amount}</p>
					</div>
				</div>
				);
		}
	}


	class MonthlyReport extends React.Component {
		// Use the render function to return JSX component
		render() {
			const {
				fashionThisMonth,
				electronicsThisMonth,
				homeThisMonth,
				foodThisMonth,
				officeThisMonth,

				fashionDesired,
				electronicsDesired,
				homeDesired,
				foodDesired,
				officeDesired,
			} = this.props;

			return (
				<div className="monthly-report-container">
					<div className="header-container">
						<label className="label">{""}</label>
						<div className="header">{"Fashion"}</div>
						<div className="header">{"Electronics"}</div>
						<div className="header">{"Home"}</div>
						<div className="header">{"Food"}</div>
						<div className="header">{"Office"}</div>
					</div>
					<div className="spending-summary-container">
						<label className="label">{"This Month"}</label>
						<div className="amount">{fashionThisMonth}</div>
						<div className="amount">{electronicsThisMonth}</div>
						<div className="amount">{homeThisMonth}</div>
						<div className="amount">{foodThisMonth}</div>
						<div className="amount">{officeThisMonth}</div>
					</div>
					<div className="spending-summary-container">
						<label className="label">{"Desired"}</label>
						<div className="amount">{fashionDesired}</div>
						<div className="amount">{electronicsDesired}</div>
						<div className="amount">{homeDesired}</div>
						<div className="amount">{foodDesired}</div>
						<div className="amount">{officeDesired}</div>
					</div>
				</div>
				);
		}
	}

	// Create a function to wrap up your component
	function App(){
		return(
			<div className="app">
				<nav class="navbar fixed-top navbar-expand-lg navbar-dark">
				  <a class="navbar-brand" href="#">COMPANY</a>
				  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span class="navbar-toggler-icon"></span>
				  </button>
				  <div class="collapse navbar-collapse" id="navbarNav">
				    <ul class="navbar-nav mr-auto">
				      <li class="nav-item active">
				        <a class="nav-link" href="#this-month-section">Current Month</a>
				      </li>
				      <li class="nav-item">
				        <a class="nav-link" href="#monthly-history-section">Monthly History</a>
				      </li>
				      <li class="nav-item">
				        <a class="nav-link" href="#debt-section">Debt</a>
				      </li>
				    </ul>
				    <ul class="navbar-nav">
				      <li class="nav-item ml-auto">
				        <a class="nav-link" href="../index.html" >Logout</a>
				      </li>
				    </ul>
				  </div>
				</nav>
				<div id="this-month-section">
					<div className="title"></div>
					<div className="content">
						<div className="score-label">Current Score</div>
						<div className="score-container">3,000</div>
						<MonthlyReport
							fashionThisMonth="$1,000"
							electronicsThisMonth="$1,000"
							homeThisMonth="$1,000"
							foodThisMonth="$1,000"
							officeThisMonth="$1,000"

							fashionDesired="$1,000"
							electronicsDesired="$1,000"
							homeDesired="$1,000"
							foodDesired="$1,000"
							officeDesired="$1,000"
						/>
					</div>
				</div>
				<div id="monthly-history-section">
					<div className="title"></div>
					<div className="content">
						<section>
							<p><center>Expense Breakdown</center></p>
							<div class="box">
								<center><canvas class = "art" id = "barChart" height = "150" width = "400"></canvas></center>
							</div>
						</section>
						<div className="income-totals">
							<LabelledAmount
								label="Income"
								amount="3000"
							/>
							<LabelledAmount
								label="Total Balance"
								amount="3000"
							/>
						</div>
					</div>
				</div>
				<div id="debt-section">
					<div className="title"></div>
					<div className="content">
						<section>
							<p><center>Loan Repayment</center></p>
							<div class="box">
								<center><canvas class = "art" id = "lineChart" height = "450" width = "800"></canvas></center>
							</div>
						</section>
						<div className="debt-totals">
							<LabelledAmount
								label="Student Debt"
								amount="3000"
							/>
							<LabelledAmount
								label="Credit Card Debt"
								amount="3000"
							/>
						</div>
					</div>
				</div>
			</div>
			)
	}


	// Use the ReactDOM.render to show your component on the browser
	ReactDOM.render(
		<App />,
		rootElement
		)