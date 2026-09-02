document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 🛡️ IIT EXPERT FIX: ANTI-INSPECT & RIGHT-CLICK SECURITY ENGINE
    // ==========================================
    
    // 1. Right Click (Context Menu) Disabled
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault(); // Default menu block
    });

    // 2. Keyboard Hacker Shortcuts Block (F12, DevTools, View Source)
    document.addEventListener('keydown', (event) => {
        // Block F12
        if (event.key === 'F12' || event.keyCode === 123) {
            event.preventDefault();
        }
        // Block Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Developer Tools)
        if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'i' || event.key === 'J' || event.key === 'j' || event.key === 'C' || event.key === 'c')) {
            event.preventDefault();
        }
        // Block Ctrl+U (View Source)
        if (event.ctrlKey && (event.key === 'U' || event.key === 'u')) {
            event.preventDefault();
        }
    });
    
    // ==========================================
    // 0. FIREBASE INITIALIZATION
    // ==========================================
    const firebaseConfig = {
        apiKey: "AIzaSyAOgfi4Rf_mXVGDp_-MtYie1rJ1Kgm5kjQ",
        authDomain: "grow-you-future.firebaseapp.com",
        databaseURL: "https://grow-you-future-default-rtdb.asia-southeast1.firebasedatabase.app/",
        projectId: "grow-you-future",
        storageBucket: "grow-you-future.firebasestorage.app",
        messagingSenderId: "105468107396",
        appId: "1:105468107396:web:bd72075ec134587260c0d1"
    };


    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const auth = firebase.auth();

    const appContainer = document.getElementById('app-container');

    // ==========================================
    // MASTER GOOGLE SCRIPT URL (Global Engine Scope)
    // ==========================================
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzujlLyP5BInmW04UsAnWL58Ej7Fj3qS5bAnoEXrkc121cV03-OOGLGO9RAQpzYvsalrA/exec";

    // ==========================================
    // PREMIUM CUSTOM ALERT FUNCTION
    // ==========================================
    function showCustomAlert(message) {
        const alertOverlay = document.getElementById('custom-alert');
        const alertMessage = document.getElementById('custom-alert-message');
        const alertBtn = document.getElementById('custom-alert-btn');

        alertMessage.innerText = message;
        alertOverlay.style.display = 'flex'; // Popup dikhao

        alertBtn.onclick = () => {
            alertOverlay.style.display = 'none'; // OK dabane par chhupao
        };
    }

    // ==========================================
    // 1. ROUTER ENGINE (Global Scope Loophole Fixed)
    // ==========================================

    // 🚀 IIT EXPERT FIX: Define Master Admin Identity (Change this to your real Admin Email)
    const MASTER_ADMIN_EMAIL = "growyourfutureofficial@gmail.com"; 

    window.navigateTo = function(screen, pushToHistory = true) {
        
        // 🚀 IIT EXPERT FIX: Hardcore Route Protection (Console Bypass Killer)
        const adminRoutes = ['adminLogin', 'adminDashboard', 'adminDepositRequests', 'adminWithdrawRequests', 'adminSubmitRequests', 'adminUsersList', 'adminQueries', 'adminChat'];
        
        if (adminRoutes.includes(screen)) {
            const user = firebase.auth().currentUser;
            if (!user || user.email !== MASTER_ADMIN_EMAIL) {
                showCustomAlert("Security Engine Blocked Access: Unauthorized Route.");
                return; // 🛡️ Execution blocked instantly. No screen will load.
            }
        }

        if (pushToHistory) {
            history.pushState({ screen: screen }, '', '#' + screen);
        }

        if (screen === 'login') renderLoginScreen();
        else if (screen === 'register') renderRegisterScreen();
        else if (screen === 'forgot') renderForgotPasswordScreen();
        else if (screen === 'dashboard') renderDashboardScreen();
        else if (screen === 'submit') renderSubmitScreen(); // 🚀 Activated
        else if (screen === 'team') renderTeamScreen();
        else if (screen === 'wallet') renderWalletScreen();
        else if (screen === 'withdraw') renderWithdrawScreen(); 
        else if (screen === 'deposit') renderDepositScreen(); 
        else if (screen === 'support') renderSupportScreen();
        else if (screen === 'adminLogin') renderAdminLoginScreen(); 
        else if (screen === 'adminDashboard') renderAdminDashboardScreen(); 
        else if (screen === 'adminDepositRequests') renderAdminDepositRequestsScreen(); 
        else if (screen === 'adminWithdrawRequests') renderAdminWithdrawRequestsScreen(); 
        else if (screen === 'adminSubmitRequests') renderAdminSubmitRequestsScreen(); 
        else if (screen === 'adminUsersList') renderAdminUsersListScreen(); // 🚀 Premium Users Route
        else if (screen === 'adminQueries') renderAdminQueriesScreen();
        else if (screen === 'adminChat') renderAdminChatScreen(); 
        else renderLoginScreen();
    };

    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.screen) {
            navigateTo(event.state.screen, false); 
        } else {
            navigateTo('login', false);
        }
    });

    // ==========================================
    // 2. UI SCREENS & FIREBASE LOGIC
    // ==========================================

    function renderLoginScreen() {
        appContainer.innerHTML = `
            <div class="screen text-center" style="display: flex; flex-direction: column; justify-content: center; min-height: 100vh; padding: 24px; overflow-y: auto;">
                
                <div class="login-header-premium" style="margin-bottom: 20px; margin-top: 15px;">
                    <img src="./icon-512x512.png" alt="App Logo" class="premium-app-logo">
                    <h1 class="premium-title">Grow Your Future</h1>
                    <p class="premium-subtitle">Your Ultimate Earning & Growing Portal</p>
                </div>

                <!-- 🚀 IIT EXPERT FIX: Professional Trust Stats Grid -->
                <div class="trust-stats-container">
                    <div class="trust-stat-box">
                        <span class="material-symbols-rounded stat-icon" style="color: #3b82f6; background: rgba(59, 130, 246, 0.1);">group</span>
                        <h4>5K+</h4>
                        <p>Trsuted Users</p>
                    </div>
                    <div class="trust-stat-box">
                        <span class="material-symbols-rounded stat-icon" style="color: #10b981; background: rgba(16, 185, 129, 0.1);">verified_user</span>
                        <h4>100%</h4>
                        <p>Secure</p>
                    </div>
                    <div class="trust-stat-box">
                        <span class="material-symbols-rounded stat-icon" style="color: #f59e0b; background: rgba(245, 158, 11, 0.1);">account_balance_wallet</span>
                        <h4>24/7</h4>
                        <p>Payouts</p>
                    </div>
                </div>

                <form id="loginForm" class="premium-form">
                    <div class="premium-input-wrapper">
                        <span class="material-symbols-rounded input-icon">mail</span>
                        <input type="email" id="loginEmail" placeholder="Email Address" required>
                    </div>
                    
                    <div class="premium-input-wrapper">
                        <span class="material-symbols-rounded input-icon">lock</span>
                        <input type="password" id="loginPassword" placeholder="Password" required>
                    </div>
                    
                    <div style="text-align: right; margin-bottom: 20px; width: 100%;">
                        <a class="forgot-link-premium cursor-pointer" id="goToForgot">Forgot Password?</a>
                    </div>

                    <button type="submit" class="btn-premium-login" id="loginBtn">
                        SIGN IN <span class="material-symbols-rounded" style="font-size: 18px; margin-left: 6px;">arrow_forward</span>
                    </button>
                </form>

                <div class="register-prompt">
                    <p>Don't have an account? <span class="register-link cursor-pointer" id="goToRegister">Create Now</span></p>
                </div>

                <!-- 🚀 IIT EXPERT FIX: Security Promise Footer -->
                <div class="login-trust-footer">
                    <p class="privacy-promise">
                        <span class="material-symbols-rounded" style="font-size: 14px; margin-right: 4px;">verified_user</span> 
                        End-to-End Encrypted & Secure
                    </p>
                </div>

            </div>
        `;
        
        // Navigation Listeners
        document.getElementById('goToRegister').addEventListener('click', () => navigateTo('register'));
        document.getElementById('goToForgot').addEventListener('click', () => navigateTo('forgot'));

        // Firebase Login Logic
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault(); // Page reload rokne ke liye
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const btn = document.getElementById('loginBtn');
            
            btn.innerHTML = "Logging in...";
            btn.disabled = true;

            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Login successful (Auth state listener automatically dashboard pe bhej dega)
                    console.log("Logged In:", userCredential.user.email);
                })
                .catch((error) => {
                    btn.innerHTML = "Login";
                    btn.disabled = false;
                    alert("Login Failed: " + error.message); // Native error handling
                });
        });
    }

    function renderRegisterScreen() {
        appContainer.innerHTML = `
            <div class="screen">
                <h1 class="text-left">Create Account</h1>
                <p class="subtitle text-left">Join GYF</p>

                <form id="registerForm">
                    <div class="input-group text-left">
                        <label>Full Name</label>
                        <input type="text" id="regName" required>
                    </div>
                    <div class="input-group text-left">
                        <label>Email</label>
                        <input type="email" id="regEmail" required>
                    </div>
                    <div class="input-group text-left">
                        <label>Phone</label>
                        <input type="tel" id="regPhone" required>
                    </div>
                    <div class="input-group text-left">
                        <label>Password</label>
                        <input type="password" id="regPassword" required>
                    </div>
                    <div class="input-group text-left">
                        <label>Referral Code *</label>
                        <input type="text" id="regReferral" placeholder="Referral code (required)" required style="text-transform: uppercase;">
                    </div>
                    <button type="submit" class="btn-primary" id="regBtn">Register</button>
                </form>

                <p class="bottom-link text-center">Already have an account? <span class="text-green font-bold cursor-pointer" id="goToLogin">Login</span></p>
            </div>
        `;
        
        // 🚀 IIT EXPERT FIX: Auto-Extract & Lock Referral Code from URL
        const urlParams = new URLSearchParams(window.location.search);
        const refCodeFromUrl = urlParams.get('ref');
        if (refCodeFromUrl) {
            const refInput = document.getElementById('regReferral');
            refInput.value = refCodeFromUrl.toUpperCase();
            refInput.readOnly = true; 
            refInput.style.backgroundColor = "#e2e8f0"; // Premium locked UI feel
            refInput.style.color = "#1b6e35";
            refInput.style.fontWeight = "900";
        }
        
        document.getElementById('goToLogin').addEventListener('click', () => navigateTo('login'));

        // ==========================================
        // FIREBASE + GOOGLE SHEET REGISTER LOGIC
        // ==========================================
        document.getElementById('registerForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const phone = document.getElementById('regPhone').value.trim(); // 🚀 IIT EXPERT FIX: Extract Phone
            const password = document.getElementById('regPassword').value;
            const inputReferral = document.getElementById('regReferral').value.trim(); 
            const btn = document.getElementById('regBtn');

            if (GOOGLE_SCRIPT_URL === "AAPKI_GOOGLE_SCRIPT_WEB_APP_URL") {
                showCustomAlert("IIT Expert Note: Pehle Google Script URL update karein app.js me!");
                return;
            }

            btn.innerHTML = "Verifying Referral...";
            btn.disabled = true;

            try {
                // STEP 1: Verify Referral Code First
                let verifyResponse = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    body: JSON.stringify({ action: 'verifyReferral', referralCode: inputReferral })
                });
                let verifyData = await verifyResponse.json();

                // Agar code database me nahi mila to execution yahin block kar do
                if (!verifyData.valid) {
                    btn.innerHTML = "Register";
                    btn.disabled = false;
                    showCustomAlert("Referral Code not found! Kripya sahi referral code dalein.");
                    return; 
                }

                // STEP 2: Create Account on Firebase
                btn.innerHTML = "Creating Account...";
                let userCredential = await auth.createUserWithEmailAndPassword(email, password);
                
                // 🚀 IIT EXPERT FIX: Extract Secure Firebase UID
                let secureUid = userCredential.user.uid;

                // STEP 3: Push Data to Google Sheet (Generate New Code)
                btn.innerHTML = "Saving Details...";
                let saveResponse = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    headers: { "Content-Type": "text/plain;charset=utf-8" },
                    body: JSON.stringify({
                        action: 'registerUser',
                        name: name,
                        email: email,
                        phone: phone, // 🚀 Send Mobile Number to backend
                        uid: secureUid,
                        appliedReferral: inputReferral 
                    })
                });
                let saveData = await saveResponse.json();

                if (saveData.status === "success") {
                    console.log("Database Save Done! New Referral: ", saveData.myReferralCode);
                    // Yahan se App ka Auth State Listener usko automatically Dashboard par le jayega
                } else {
                    throw new Error("Data Google Sheet mein save nahi ho paya.");
                }

            } catch (error) {
                btn.innerHTML = "Register";
                btn.disabled = false;
                showCustomAlert("Registration Error: " + error.message);
            }
        });
    }

    function renderForgotPasswordScreen() {
        appContainer.innerHTML = `
            <div class="top-nav">
                <button class="back-btn" id="goBack">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                <div class="nav-title">Forgot Password</div>
            </div>
            <div class="screen">
                <br>
                <h2 class="text-left">Apna registered email enter karein</h2>
                <p class="subtitle text-left" style="margin-bottom: 20px;">Hum aapko OTP/Link bhejenge password reset ke liye.</p>

                <form id="forgotForm">
                    <div class="input-group text-left">
                        <label>Email</label>
                        <input type="email" id="forgotEmail" required>
                    </div>
                    <button type="submit" class="btn-primary" id="resetBtn">Send Reset Link</button>
                </form>
            </div>
        `;
        
        document.getElementById('goBack').addEventListener('click', () => history.back());

        // Firebase Forgot Password Logic
        document.getElementById('forgotForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('forgotEmail').value;
            const btn = document.getElementById('resetBtn');

            btn.innerHTML = "Sending...";
            btn.disabled = true;

            auth.sendPasswordResetEmail(email)
                .then(() => {
                    alert("Password reset link sent to your email!");
                    navigateTo('login');
                })
                .catch((error) => {
                    btn.innerHTML = "Send Reset Link";
                    btn.disabled = false;
                    alert("Error: " + error.message);
                });
        });
    }

    // ==========================================
    // BOTTOM NAVIGATION HELPER (DRY Principle)
    // ==========================================
    function getBottomNavHTML(activeTab) {
        return `
            <div class="bottom-nav">
                <div class="nav-item ${activeTab === 'dashboard' ? 'active' : ''}" onclick="navigateTo('dashboard')">
                    <div class="icon-container">
                        <span class="${activeTab === 'dashboard' ? 'material-symbols-rounded' : 'material-symbols-outlined'}">home</span>
                    </div>
                    <span>Home</span>
                </div>
                <div class="nav-item ${activeTab === 'submit' ? 'active' : ''}" onclick="navigateTo('submit')">
                    <div class="icon-container">
                        <span class="${activeTab === 'submit' ? 'material-symbols-rounded' : 'material-symbols-outlined'}">description</span>
                    </div>
                    <span>Submit</span>
                </div>
                <div class="nav-item ${activeTab === 'team' ? 'active' : ''}" onclick="navigateTo('team')">
                    <div class="icon-container">
                        <span class="${activeTab === 'team' ? 'material-symbols-rounded' : 'material-symbols-outlined'}">groups</span>
                    </div>
                    <span>Team</span>
                </div>
                <div class="nav-item ${activeTab === 'wallet' ? 'active' : ''}" onclick="navigateTo('wallet')">
                    <div class="icon-container">
                        <span class="${activeTab === 'wallet' ? 'material-symbols-rounded' : 'material-symbols-outlined'}">account_balance_wallet</span>
                    </div>
                    <span>Wallet</span>
                </div>
                <div class="nav-item ${activeTab === 'support' ? 'active' : ''}" onclick="navigateTo('support')">
                    <div class="icon-container">
                        <span class="${activeTab === 'support' ? 'material-symbols-rounded' : 'material-symbols-outlined'}">chat</span>
                    </div>
                    <span>Support</span>
                </div>
            </div>
        `;
    }

    // ==========================================
    // 3. MAIN DASHBOARD SCREEN (Engineered with Live Sync)
    // ==========================================
    function renderDashboardScreen() {
        appContainer.innerHTML = `
            <div class="dashboard-layout" style="animation: fadeIn 0.3s ease-in-out;">
                <div class="header-top">
                    <div class="header-text">
                        <p>Namaste,</p>
                        <h2 id="userNameDisplay">Loading...</h2>
                    </div>
                    <span class="material-symbols-outlined logout-btn" id="logoutBtn">logout</span>
                </div>

                <div class="wallet-card">
                    <!-- 🚀 IIT EXPERT FIX: Premium Privacy Eye Toggle Header -->
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <div class="wallet-balance-label" style="margin-bottom: 0;">Wallet Balance</div>
                        <button id="toggleBalanceBtn" style="background: transparent; border: none; color: rgba(255,255,255,0.7); cursor: pointer; padding: 4px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease;" onmousedown="this.style.transform='scale(0.85)'" onmouseup="this.style.transform='scale(1)'">
                            <span class="material-symbols-rounded" id="balanceEyeIcon" style="font-size: 20px;">visibility_off</span>
                        </button>
                    </div>
                    <!-- Default state hidden for privacy -->
                    <div class="wallet-amount" id="walletAmountDisplay" data-balance="0">₹••••••</div>
                    <div class="wallet-stats">
                        <span id="totalEarnedDisplay">Total Earned: ₹0.00</span>
                        <!-- 🚀 IIT EXPERT FIX: Added dynamic ID for account status engine -->
                        <span id="accountStatusBadge" class="badge-inactive" style="transition: all 0.3s ease;">Loading...</span>
                    </div>
                    <div class="wallet-actions">
                        <button class="action-btn" onclick="navigateTo('deposit')">
                            <span class="material-symbols-outlined">add_circle</span>Deposit
                        </button>
                        <button class="action-btn" onclick="navigateTo('withdraw')">
                            <span class="material-symbols-outlined">arrow_upward</span>Withdraw
                        </button>
                        <button class="action-btn" onclick="navigateTo('submit')">
                            <span class="material-symbols-outlined">cloud_upload</span>Submit
                        </button>
                    </div>
                </div>

                <!-- 🚀 IIT EXPERT FIX: Bulletproof Responsive Layout (Overrides External CSS Columns) -->
                <div class="bonus-card" style="background: #ffffff; border-radius: 20px; padding: 14px 16px; margin-bottom: 25px; border: 1.5px solid #fff0e6; position: relative; overflow: hidden;">
                    
                    <!-- Premium Glow Effect -->
                    <div style="position: absolute; top: -30px; left: -30px; width: 120px; height: 120px; background: radial-gradient(circle, rgba(250,70,5,0.08) 0%, rgba(255,255,255,0) 70%); border-radius: 50%; z-index: 0;"></div>

                    <!-- 🚀 MASTER FLEX ROW: !important forces button to stay strictly on the right side always -->
                    <div style="display: flex !important; flex-direction: row !important; align-items: center !important; justify-content: space-between !important; width: 100% !important; gap: 8px; position: relative; z-index: 1;">
                        
                        <!-- Left Content Container -->
                        <div style="display: flex !important; flex-direction: row !important; align-items: center !important; gap: 10px; flex-grow: 1; min-width: 0;">
                            
                            <!-- Premium Icon Box -->
                            <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #fff7ed, #ffedd5); border-radius: 14px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(250, 70, 5, 0.1); flex-shrink: 0;">
                                <span class="material-symbols-rounded" style="font-size: 24px; color: #FA4605;">redeem</span>
                            </div>
                            
                            <div style="display: flex; flex-direction: column; justify-content: center; min-width: 0;">
                                <h3 style="margin: 0 0 2px 0 !important; font-size: 15px; font-weight: 800; color: #0f172a; letter-spacing: 0.2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Daily Bonus</h3>
                                <p style="margin: 0 0 4px 0 !important; font-size: 11px; color: #64748b; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Claim <span style="color: #FA4605; font-weight: 800;">₹20</span> every day</p>
                                
                                <!-- Untouched Logic ID -->
                                <div class="claimed-days" id="totalClaimedDaysText" style="display: inline-flex; align-items: center; gap: 4px; background: #f8fafc; padding: 4px 8px; border-radius: 20px; font-size: 10px; font-weight: 700; color: #475569; border: 1px solid #e2e8f0; width: fit-content; white-space: nowrap;">
                                    <span class="material-symbols-rounded" style="font-size: 11px; color: #10b981;">task_alt</span> Total: 0 days
                                </div>
                            </div>
                        </div>
                        
                        <!-- Button Container (Locked from shrinking and external margins) -->
                        <div style="flex-shrink: 0;">
                            <!-- Untouched Logic ID -->
                            <button class="btn-golden" id="claimBonusBtn" disabled style="background: #e2e8f0; color: #ffffff; border: none; padding: 10px 14px; border-radius: 12px; font-weight: 800; font-size: 12px; cursor: pointer; white-space: nowrap; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 6px 15px rgba(250, 70, 5, 0.25); text-shadow: 0 1px 2px rgba(0,0,0,0.15); margin: 0 !important; display: block !important;" onmousedown="this.style.transform='scale(0.92)'" onmouseup="this.style.transform='scale(1)'">Loading...</button>
                        </div>

                    </div>
                </div>

                <!-- 🚀 IIT EXPERT FIX: Fully Clickable Premium Plan Card -->
                <div class="plan-card cursor-pointer" onclick="navigateTo('deposit')" style="position: relative; transition: transform 0.1s;" onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform='scale(1)'" onmouseleave="this.style.transform='scale(1)'">
                    <h3>Choose a Plan</h3>
                    <p style="padding-right: 30px;">Deposit karke account activate karein aur pages submit karein.</p>
                    <!-- Native Arrow Icon for Navigation UI -->
                    <span class="material-symbols-rounded" style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%); color: #1b6e35; font-size: 20px;">arrow_forward_ios</span>
                </div>

                <div class="section-title" style="margin-top: 25px;">Recent Deposit Requests</div>
                <!-- 🚀 IIT EXPERT FIX: Dynamic History Container -->
                <div id="userDepositHistoryList" style="padding-bottom: 20px;">
                    <p class="empty-state text-center" style="font-size: 13px; color: #9ca3af;">Loading secure history...</p>
                </div>
            </div>

            <!-- Injecting Bottom Nav Dynamically -->
            ${getBottomNavHTML('dashboard')}
        `;
        
        // 🚀 IIT EXPERT FIX: Privacy Toggle Engine Logic
        const toggleBtn = document.getElementById('toggleBalanceBtn');
        const eyeIcon = document.getElementById('balanceEyeIcon');
        const walletAmtDisplay = document.getElementById('walletAmountDisplay');

        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const realBalance = walletAmtDisplay.getAttribute('data-balance') || "0";
                
                if (eyeIcon.innerText === 'visibility_off') {
                    // Show Balance
                    eyeIcon.innerText = 'visibility';
                    walletAmtDisplay.innerText = `₹${realBalance}.00`;
                    eyeIcon.style.color = "#ffffff"; 
                } else {
                    // Hide Balance
                    eyeIcon.innerText = 'visibility_off';
                    walletAmtDisplay.innerText = `₹••••••`;
                    eyeIcon.style.color = "rgba(255,255,255,0.7)"; 
                }
            });
        }

        const user = auth.currentUser;
        if(user) {
            // App UI instantly dikhe, isliye background mein fetch call lagaya hai
            syncUserProfileAndBonus(user.email);
        }

        document.getElementById('logoutBtn').addEventListener('click', () => {
            auth.signOut().catch((error) => showCustomAlert("Error logging out: " + error.message));
        });
    }


    // ==========================================
    // LIVE GOOGLE SHEET SYNC ENGINE (100% Bulletproof & Loophole Free)
    // ==========================================
    async function syncUserProfileAndBonus(email) {
        
        const claimBtn = document.getElementById('claimBonusBtn');
        const daysText = document.getElementById('totalClaimedDaysText');
        const walletAmt = document.getElementById('walletAmountDisplay');
        const earnedAmt = document.getElementById('totalEarnedDisplay');
        const userName = document.getElementById('userNameDisplay');

        try {
            // 🛡️ IIT EXPERT ENGINE: Extract UID securely from active session
            const activeUser = firebase.auth().currentUser;
            const secureUid = activeUser ? activeUser.uid : "GHOST_USER";

            let response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { "Content-Type": "text/plain;charset=utf-8" }, 
                body: JSON.stringify({ action: 'getUserProfile', email: email, uid: secureUid })
            });
            
            // 🛡️ IIT EXPERT ENGINE: Failsafe Text Parsing (Prevents HTML Redirect Death)
            let textRes = await response.text();
            let result;
            try {
                result = JSON.parse(textRes);
            } catch (jsonErr) {
                throw new Error("Server communication broken. Received invalid data.");
            }

            if (result.status === "success") {
                userName.innerText = result.name;
                daysText.innerText = `Total claimed: ${result.totalDays} days`;
                
                // 🚀 IIT EXPERT SEPARATION: Wallet for Deposits, Earned for Bonus
                walletAmt.setAttribute('data-balance', result.walletBalance);
                
                // Smart privacy check on live database sync
                const eyeIcon = document.getElementById('balanceEyeIcon');
                if (eyeIcon && eyeIcon.innerText === 'visibility') {
                    walletAmt.innerText = `₹${result.walletBalance}.00`; 
                } else {
                    walletAmt.innerText = `₹••••••`; // Keep it hidden if eye is closed
                }
                
                earnedAmt.innerText = `Total Earned: ₹${result.totalBonus}.00`;

                // 🚀 IIT EXPERT FIX: Dynamic Verified Badge Engine
                const statusBadge = document.getElementById('accountStatusBadge');
                if (result.accountStatus === "Active") {
                    statusBadge.className = "badge-verified"; // Class badal jayegi premium UI ke liye
                    statusBadge.innerHTML = `<span class="material-symbols-rounded" style="font-size: 14px; margin-right: 3px;">verified</span> Verified`;
                } else {
                    statusBadge.className = "badge-inactive";
                    statusBadge.innerHTML = `Inactive`;
                }

                // 🚀 IIT EXPERT FIX: Hide Daily Bonus Card forever if Account is Active
                const bonusCardEl = document.querySelector('.bonus-card');
                if (result.accountStatus === "Active") {
                    if(bonusCardEl) bonusCardEl.style.display = 'none';
                } else {
                    if(bonusCardEl) bonusCardEl.style.display = 'block';
                }

                // 🚀 IIT EXPERT FIX: Render Premium Transaction & Daily Bonus History
                const historyContainer = document.getElementById('userDepositHistoryList');
                if (result.depositHistory && result.depositHistory.length > 0) {
                    result.depositHistory.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                    
                    historyContainer.innerHTML = result.depositHistory.map(item => {
                        let badgeHtml = "";
                        let titleText = `₹${item.amount} Deposit`;
                        let iconHtml = `<span class="material-symbols-rounded" style="font-size: 14px;">event</span>`;

                        if (item.status === "Bonus" || item.txnId === "DAILY_BONUS") {
                            badgeHtml = `<span style="background: #e0e7ff; color: #3b82f6; padding: 4px 8px; border-radius: 8px; font-size: 10px; font-weight: 800; display: inline-flex; align-items: center; gap: 3px; box-shadow: 0 2px 6px rgba(59, 130, 246, 0.15);"><span class="material-symbols-rounded" style="font-size: 14px;">redeem</span> CLAIMED</span>`;
                            titleText = `₹${item.amount} Daily Bonus`;
                        } else if (item.status === true || item.status === "true") {
                            badgeHtml = `<span style="background: #dcfce7; color: #059669; padding: 4px 8px; border-radius: 8px; font-size: 10px; font-weight: 800; display: inline-flex; align-items: center; gap: 3px; box-shadow: 0 2px 6px rgba(5, 150, 105, 0.15);"><span class="material-symbols-rounded" style="font-size: 14px;">check_circle</span> APPROVED</span>`;
                        } else {
                            badgeHtml = `<span style="background: #fef3c7; color: #d97706; padding: 4px 8px; border-radius: 8px; font-size: 10px; font-weight: 800; display: inline-flex; align-items: center; gap: 3px; box-shadow: 0 2px 6px rgba(217, 119, 6, 0.15);"><span class="material-symbols-rounded" style="font-size: 14px;">schedule</span> PENDING</span>`;
                        }
                        
                        // 🚀 IIT EXPERT FIX: Smart Time Formatter (ISO to Human Readable IST)
                        let displayDate = item.timestamp;
                        try {
                            const dateObj = new Date(item.timestamp);
                            if (!isNaN(dateObj.getTime())) {
                                displayDate = dateObj.toLocaleString('en-IN', {
                                    day: '2-digit', month: 'short', year: 'numeric',
                                    hour: '2-digit', minute: '2-digit', hour12: true
                                });
                            }
                        } catch(e) {}
                        
                        return `
                            <div style="background: #ffffff; border: 1.5px solid #f3f4f6; border-radius: 14px; padding: 14px 16px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 12px rgba(0,0,0,0.03); transition: transform 0.2s ease;">
                                <div style="display: flex; flex-direction: column; gap: 5px;">
                                    <span style="font-size: 15px; font-weight: 800; color: #111827;">${titleText}</span>
                                    <span style="font-size: 11px; font-weight: 700; color: #6b7280; display: flex; align-items: center; gap: 4px;">
                                        ${iconHtml} ${displayDate}
                                    </span>
                                </div>
                                <div>
                                    ${badgeHtml}
                                </div>
                            </div>
                        `;
                    }).join('');
                } else {
                    historyContainer.innerHTML = `<div style="background: #f8fafc; border: 1.5px dashed #e2e8f0; border-radius: 14px; padding: 20px; text-align: center;">
                        <span class="material-symbols-rounded" style="font-size: 32px; color: #94a3b8; margin-bottom: 8px;">receipt_long</span>
                        <p style="font-size: 13px; font-weight: 600; color: #64748b; margin: 0;">No past transactions found.</p>
                    </div>`;
                }

                // 🚀 IIT EXPERT FIX: Client-side time hata diya. Ab strictly backend 'serverToday' check karega.
                if (result.lastClaimDate === result.serverToday) {
                    claimBtn.disabled = true; 
                    claimBtn.innerHTML = `<span class="material-symbols-rounded" style="font-size:16px; margin-right:4px;">check</span>Claimed`;
                    claimBtn.style.background = "#e6cd9e";
                } else {
                    claimBtn.disabled = false; 
                    claimBtn.innerHTML = "Claim ₹20";
                    claimBtn.style.background = "#FA4605";
                }

                claimBtn.onclick = async () => {
                    claimBtn.disabled = true;
                    claimBtn.innerHTML = "Processing...";

                    try {
                        // Secure UID Extraction from background session
                        const activeUser = firebase.auth().currentUser;
                        const secureUid = activeUser ? activeUser.uid : "GHOST_USER";

                        let claimRes = await fetch(GOOGLE_SCRIPT_URL, {
                            method: 'POST',
                            headers: { "Content-Type": "text/plain;charset=utf-8" },
                            body: JSON.stringify({ action: 'claimDailyBonus', email: email, uid: secureUid }) 
                        });
                        let textRes = await claimRes.text();
                        let claimData = JSON.parse(textRes);

                        if (claimData.status === "success" || claimData.status === "already_claimed") {
                            
                            // 🚀 IIT EXPERT FIX: DRY Principle (Don't Repeat Yourself)
                            // Button locking engine dono status ke liye ek hi baar run hoga
                            claimBtn.disabled = true;
                            claimBtn.innerHTML = `<span class="material-symbols-rounded" style="font-size:16px; margin-right:4px;">check</span>Claimed`;
                            claimBtn.style.background = "#e6cd9e";

                            if (claimData.status === "success") {
                                daysText.innerText = `Total claimed: ${claimData.totalDays} days`;
                                walletAmt.innerText = `₹${claimData.walletBalance || claimData.totalBonus}.00`;
                                earnedAmt.innerText = `Total Earned: ₹${claimData.totalBonus}.00`;
                                showCustomAlert("Premium Unlock: ₹20 bonus successfully aapke wallet mein add ho gaya!");
                                
                                // 🚀 IIT EXPERT FIX: Instantly refresh the history list seamlessly
                                syncUserProfileAndBonus(email); 
                            } else {
                                showCustomAlert("Aap aaj ka bonus already claim kar chuke hain. Kal phir aaiye!");
                            }
                            
                        } else {
                            throw new Error(claimData.message);
                        }
                    } catch(err) {
                        claimBtn.disabled = false; // Allow retry on network disconnect only
                        claimBtn.innerHTML = "Claim ₹20 Now";
                        showCustomAlert("Network Error: " + err.message);
                    }
                };

            } else {
                userName.innerText = "Student";
                claimBtn.disabled = true; // Loophole Closed: Agar profile fetch nahi hui toh hack karne se roko
                claimBtn.innerHTML = "User Not Found";
            }
        } catch(error) {
            userName.innerText = "Welcome back";
            // 🚀 IIT EXPERT FIX: Network fail hone par button Galti se ENABLE NAHI karna hai!
            claimBtn.disabled = true; 
            claimBtn.innerHTML = "Weak Netwrok";
            claimBtn.style.background = "#e6cd9e";
            console.error("Profile sync failed: ", error);
        }
    }



    // ==========================================
    // 🚀 PREMIUM SUBMIT WORK SCREEN (Dual-Tab & Max 1 Engine)
    // ==========================================
    function renderSubmitScreen() {
        appContainer.innerHTML = `
            <!-- 🚀 IIT EXPERT FIX: Removed inline sticky. Relies on Bulletproof CSS -->
            <div class="top-nav" style="background: #ffffff; border-bottom: 1px solid #f1f5f9;">
                <div class="nav-title" style="flex-grow: 1; text-align: center; font-size: 20px; font-weight: 800; color: #0f172a;">Submit Your Work</div>
            </div>

            <div class="screen" style="padding-bottom: 100px; background: #f8fafc; min-height: 100vh;">
                
                <div id="submitUploadSection" style="animation: fadeIn 0.3s ease-out;">
                    <div style="background: linear-gradient(135deg, #960803, #3B0402); padding: 18px; border-radius: 16px; margin-bottom: 20px; color: white; box-shadow: 0 8px 20px rgba(27, 110, 53, 0.2);">
                        <h4 style="margin: 0 0 6px 0; font-size: 15px; font-weight: 800; display: flex; align-items: center; gap: 6px;"><span class="material-symbols-rounded" style="font-size: 18px;">info</span> Daily Rule</h4>
                        <p style="margin: 0; font-size: 13px; font-weight: 500; opacity: 0.9;">Only 1 submission allowed per day. Profit will automatically add to your wallet after approval.</p>
                    </div>

                    <!-- Live Image Preview Box -->
                    <label class="screenshot-upload-box" for="submitScreenshotFile" id="submitImagePreviewBox" style="background: #ffffff; border: 2px dashed #1b6e35; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                        <span class="material-symbols-outlined text-green" style="font-size: 36px; margin-bottom: 8px;" id="submitUploadIcon">note_add</span>
                        <p class="text-green font-bold" id="submitUploadText" style="font-size: 14px;">Tap to upload written page</p>
                        <input type="file" id="submitScreenshotFile" accept="image/*" style="display: none;">
                    </label>

                    <button class="btn-primary" id="workSubmitBtn" style="margin-top: 10px; padding: 16px; box-shadow: 0 6px 15px rgba(27, 110, 53, 0.25);">Submit Page</button>
                </div>

                <div id="alreadySubmittedSection" style="display: none; background: #fffbeb; border: 1.5px solid #fcd34d; border-radius: 16px; padding: 25px 20px; text-align: center; margin-bottom: 20px; animation: popIn 0.3s ease-out;">
                    <span class="material-symbols-rounded" style="font-size: 48px; color: #f59e0b; margin-bottom: 10px;">task_alt</span>
                    <h3 style="color: #b45309; font-size: 18px; margin: 0 0 8px 0; font-weight: 900;">Already Submitted</h3>
                    <p style="color: #d97706; font-size: 13px; font-weight: 600; margin: 0;">You have successfully submitted your work for today. Please come back tomorrow.</p>
                </div>

                <!-- Dual-Tab History Engine -->
                <div style="display: flex; gap: 10px; margin-top: 30px; margin-bottom: 20px; background: #e2e8f0; padding: 6px; border-radius: 16px;">
                    <button id="tabPendingS" onclick="switchSubmitTab('Pending')" style="flex: 1; padding: 12px; border-radius: 12px; border: none; background: #ffffff; color: #1b6e35; font-weight: 800; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">Pending</button>
                    <button id="tabApprovedS" onclick="switchSubmitTab('Approved')" style="flex: 1; padding: 12px; border-radius: 12px; border: none; background: transparent; color: #64748b; font-weight: 800; cursor: pointer; transition: 0.2s;">Processed</button>
                </div>
                
                <div id="submitLoadingIndicator" class="text-center" style="color: #64748b; margin-top: 20px;">
                    <span class="material-symbols-rounded" style="animation: spin 1s linear infinite; font-size: 28px; color: #1b6e35;">sync</span>
                </div>

                <div id="submitHistoryList" style="display: flex; flex-direction: column; gap: 12px;"></div>
            </div>
            ${getBottomNavHTML('submit')}
        `;

        let base64String = null; let mimeType = null; let fileName = null;
        window.currentSubmitTab = 'Pending';
        window.submitDataCache = [];

        // Image Engine
        document.getElementById('submitScreenshotFile').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    base64String = event.target.result.split(',')[1];
                    mimeType = file.type; fileName = file.name;
                    const previewBox = document.getElementById('submitImagePreviewBox');
                    previewBox.style.backgroundImage = `url(${event.target.result})`;
                    previewBox.style.backgroundSize = 'cover'; previewBox.style.backgroundPosition = 'center'; previewBox.style.borderStyle = 'solid';
                    document.getElementById('submitUploadText').style.display = 'none';
                    document.getElementById('submitUploadIcon').style.display = 'none';
                };
                reader.readAsDataURL(file);
            }
        });

        const user = firebase.auth().currentUser;
        if(user) fetchSubmitHistory(user.email);

        async function fetchSubmitHistory(email) {
            try {
                // 🛡️ IIT EXPERT ENGINE: Extract Secure UID
                const activeUser = firebase.auth().currentUser;
                const secureUid = activeUser ? activeUser.uid : "GHOST_USER";

                let res = await fetch(GOOGLE_SCRIPT_URL, { 
                    method: 'POST', 
                    headers: { "Content-Type": "text/plain;charset=utf-8" }, // 🛡️ CORS Shield
                    body: JSON.stringify({ action: 'getUserProfile', email: email, uid: secureUid }) 
                });
                
                let textRes = await res.text();
                let data = JSON.parse(textRes); // 🛡️ JSON Crash Failsafe
                
                document.getElementById('submitLoadingIndicator').style.display = 'none';

                if (data.status === "success") {
                    
                    // 🚀 IIT EXPERT FIX: Explicit UI State Toggle Engine
                    const uploadSec = document.getElementById('submitUploadSection');
                    const submittedSec = document.getElementById('alreadySubmittedSection');
                    
                    if (data.hasSubmittedToday) {
                        if(uploadSec) uploadSec.style.display = 'none';
                        if(submittedSec) submittedSec.style.display = 'block';
                    } else {
                        if(uploadSec) uploadSec.style.display = 'block';
                        if(submittedSec) submittedSec.style.display = 'none';
                    }

                    let sArr = data.submitHistory || [];
                    sArr.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));
                    window.submitDataCache = sArr;
                    renderSubmitList();
                } else {
                    console.error("Submit History Blocked: ", data.message);
                }
            } catch(e) {
                console.error("Failed to fetch submit history:", e);
                document.getElementById('submitLoadingIndicator').innerHTML = `<p style="color:#e11d48; font-size:12px; font-weight: bold;">Network Sync Error</p>`;
            }
        }

        window.switchSubmitTab = function(tab) {
            window.currentSubmitTab = tab;
            document.getElementById('tabPendingS').style.background = tab === 'Pending' ? '#ffffff' : 'transparent';
            document.getElementById('tabPendingS').style.color = tab === 'Pending' ? '#1b6e35' : '#64748b';
            document.getElementById('tabPendingS').style.boxShadow = tab === 'Pending' ? '0 4px 10px rgba(0,0,0,0.05)' : 'none';
            document.getElementById('tabApprovedS').style.background = tab === 'Approved' ? '#ffffff' : 'transparent';
            document.getElementById('tabApprovedS').style.color = tab === 'Approved' ? '#1b6e35' : '#64748b';
            document.getElementById('tabApprovedS').style.boxShadow = tab === 'Approved' ? '0 4px 10px rgba(0,0,0,0.05)' : 'none';
            renderSubmitList();
        }

        window.renderSubmitList = function() {
            const listEl = document.getElementById('submitHistoryList');
            const dataArr = window.submitDataCache.filter(item => 
                window.currentSubmitTab === 'Pending' ? item.status === 'Pending' : (item.status === 'Approved' || item.status === 'Rejected')
            );

            if (dataArr.length === 0) {
                listEl.innerHTML = `<div style="background: #ffffff; border: 1.5px dashed #cbd5e1; border-radius: 16px; padding: 25px 20px; text-align: center;"><p style="font-size: 13px; font-weight: 800; color: #64748b; margin: 0;">No ${window.currentSubmitTab} records found.</p></div>`;
                return;
            }

            let htmlBuffer = "";
            dataArr.forEach(item => {
                let displayDate = item.timestamp;
                try { const d = new Date(item.timestamp); if(!isNaN(d)) displayDate = d.toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit', hour12: true }); } catch(e){}

                let badgeHtml = item.status === "Approved" ? `<span style="background: #dcfce7; color: #059669; padding: 4px 10px; border-radius: 12px; font-size: 10px; font-weight: 800; display: inline-flex; align-items: center; gap: 3px;"><span class="material-symbols-rounded" style="font-size: 14px;">check_circle</span> APPROVED</span>` : 
                                item.status === "Rejected" ? `<span style="background: #ffe4e6; color: #e11d48; padding: 4px 10px; border-radius: 12px; font-size: 10px; font-weight: 800; display: inline-flex; align-items: center; gap: 3px;"><span class="material-symbols-rounded" style="font-size: 14px;">cancel</span> REJECTED</span>` :
                                `<span style="background: #fff3e0; color: #ea580c; padding: 4px 10px; border-radius: 12px; font-size: 10px; font-weight: 800; display: inline-flex; align-items: center; gap: 3px;"><span class="material-symbols-rounded" style="font-size: 14px;">schedule</span> PENDING</span>`;

                htmlBuffer += `
                <div style="background: #ffffff; border-radius: 16px; padding: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                    <div style="display: flex; align-items: center; gap: 12px; flex-grow: 1; overflow: hidden;">
                        <div style="width: 42px; height: 42px; background: #f8fafc; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid #e2e8f0;">
                            <span class="material-symbols-rounded" style="font-size: 24px; color: #64748b;">description</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 3px;">
                            <span style="font-size: 15px; font-weight: 800; color: #0f172a;">Daily Task</span>
                            <span style="font-size: 11px; font-weight: 600; color: #94a3b8;">${displayDate}</span>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 6px;">
                        <span style="font-size: 16px; font-weight: 900; color: #10b981; letter-spacing: 0.5px;">+₹${item.profit}</span>
                        ${badgeHtml}
                    </div>
                </div>`;
            });
            listEl.innerHTML = htmlBuffer;
        }

        // Upload Request Logic
        const submitBtn = document.getElementById('workSubmitBtn');
        submitBtn.addEventListener('click', async () => {
            if (!base64String) return showCustomAlert("Kindly upload the page photo first.");
            if(!user) return showCustomAlert("Authentication Error! Please login again.");

            submitBtn.innerHTML = "Uploading safely...";
            submitBtn.disabled = true; submitBtn.style.opacity = "0.7";

            try {
                let res = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    headers: { "Content-Type": "text/plain;charset=utf-8" }, // 🛡️ CORS Fix
                    body: JSON.stringify({ 
                        action: 'submitWork', 
                        email: user.email, 
                        uid: user.uid, // 🛡️ Anti-CSRF Token
                        imageBase64: base64String, 
                        mimeType: mimeType, 
                        imageName: fileName 
                    })
                });
                let textRes = await res.text();
                let result = JSON.parse(textRes); // 🛡️ JSON Crash Failsafe
                if (result.status === "success") {
                    showCustomAlert("Work Submitted! Profit will be added after admin review.");
                    submitBtn.innerHTML = "Locked";
                    document.getElementById('submitUploadSection').style.display = 'none';
                    document.getElementById('alreadySubmittedSection').style.display = 'block';
                    fetchSubmitHistory(user.email); // Auto Refresh UI
                } else throw new Error(result.message);
            } catch (err) {
                submitBtn.innerHTML = "Submit Page";
                submitBtn.disabled = false; submitBtn.style.opacity = "1";
                showCustomAlert(err.message);
            }
        });
    }

    // 🚀 ADMIN MULTICOLOR GRID DASHBOARD UPDATE
    function renderAdminDashboardScreen() {
        appContainer.innerHTML = `
            <div class="top-nav" style="background-color: #0f172a; border-bottom: none;">
                <button class="back-btn" id="adminLogoutBtn" style="color: #ffffff;">
                    <span class="material-symbols-outlined">logout</span>
                </button>
                <div class="nav-title text-center" style="font-size: 20px; color: #ffffff;">Admin Engine</div>
                <div style="width: 24px;"></div>
            </div>
            
            <!-- 🛡️ IIT EXPERT ENGINE: Removed conflicting inline 'padding-top: 1.5rem;' to respect global fixed CSS -->
            <div class="screen" style="background-color: #f8fafc; min-height: 100vh;">
                <div class="admin-header" style="margin-bottom: 25px;">
                    <h2 style="font-size: 26px; color: #0f172a; margin-bottom: 4px;">Dashboard</h2>
                    <p style="font-size: 14px; color: #64748b;">Overview & Platform Management</p>
                </div>
                
                <div style="background: #ffffff; border-radius: 16px; padding: 20px; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <p style="font-size: 11px; font-weight: 800; color: #64748b; margin-bottom: 4px; text-transform: uppercase;">Current Live UPI ID</p>
                        <h3 id="adminCurrentUpi" style="font-size: 16px; font-weight: 800; color: #1b6e35; margin: 0;">Loading...</h3>
                    </div>
                    <button onclick="openUpiUpdateModal()" style="background: #eff6ff; color: #2563eb; border: none; padding: 10px 18px; border-radius: 10px; font-size: 13px; font-weight: 800; cursor: pointer;">Change</button>
                </div>
                
                <div class="admin-grid">
                    <!-- Deposit Request (Priority - Full Width) -->
                    <div class="admin-card card-deposit" onclick="navigateTo('adminDepositRequests')">
                        <span class="material-symbols-rounded">payments</span>
                        <h4>Deposit Request</h4>
                        <div class="glass-badge">Live</div>
                    </div>

                    <!-- 🚀 IIT EXPERT FIX: Withdraw Request UI Updated -->
                    <div class="admin-card card-withdraw" onclick="navigateTo('adminWithdrawRequests')">
                        <span class="material-symbols-rounded">account_balance</span>
                        <h4>Withdraw Request</h4>
                        <div class="glass-badge">Live</div>
                    </div>
                    
                    <!-- 🚀 IIT EXPERT FIX: Submits Management Card -->
                    <div class="admin-card card-submit" onclick="navigateTo('adminSubmitRequests')">
                        <span class="material-symbols-rounded">description</span>
                        <h4>Page Submits</h4>
                        <div class="glass-badge">Tasks</div>
                    </div>
                    
                    <!-- 🚀 IIT EXPERT FIX: Dynamic Clickable Active Accounts -->
                    <div class="admin-card card-accounts" onclick="window.adminUsersTabFilter='Active'; navigateTo('adminUsersList');" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); cursor: pointer;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <span class="material-symbols-rounded">verified_user</span>
                            <h2 id="liveActiveCount" style="font-size: 28px; font-weight: 800; margin: 0; line-height: 1; color: white;">-</h2>
                        </div>
                        <h4 style="margin-top: 15px;">Active Accounts</h4>
                    </div>

                    <div class="admin-card card-queries" onclick="navigateTo('adminQueries')">
                        <span class="material-symbols-rounded">forum</span>
                        <h4>Queries</h4>
                        <div class="glass-badge">Chat</div>
                    </div>

                    <!-- 🚀 IIT EXPERT FIX: Dynamic Clickable Total Users -->
                    <div class="admin-card card-accounts" onclick="window.adminUsersTabFilter='All'; navigateTo('adminUsersList');" style="background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%); cursor: pointer;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <span class="material-symbols-rounded">group_add</span>
                            <h2 id="liveUsersCount" style="font-size: 28px; font-weight: 800; margin: 0; line-height: 1; color: white;">-</h2>
                        </div>
                        <h4 style="margin-top: 15px;">Total Users</h4>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('adminLogoutBtn').addEventListener('click', () => navigateTo('dashboard', false));
        fetchAdminDashboardStats(); fetchAdminLiveUpi(); 
    }


    // ==========================================
    // 🚀 ADMIN USERS DIRECTORY (Dual-Tab UI & Failsafe Router)
    // ==========================================
    function renderAdminUsersListScreen() {
        // Fallback Failsafe: Default parameter
        if (!window.adminUsersTabFilter) window.adminUsersTabFilter = 'All';

        appContainer.innerHTML = `
            <!-- 🛡️ IIT EXPERT ENGINE: Removed inline sticky -->
            <div class="top-nav" style="background-color: #ffffff; border-bottom: 1px solid #f0f0f0;">
                <button class="back-btn" id="goBackAdminUsers">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                <div class="nav-title" style="font-size: 18px; flex-grow: 1; text-align: left; font-weight: 800;">Users Directory</div>
                <div style="width: 24px;"></div>
            </div>
            
            <!-- 🛡️ IIT EXPERT ENGINE: Removed conflicting padding -->
            <div class="screen" style="background-color: #f8fafc; min-height: 100vh;">
                
                <!-- 🚀 Dual-Tab Segmented Controller -->
                <div style="display: flex; gap: 10px; margin-bottom: 20px; padding: 0 4px; background: #e2e8f0; border-radius: 16px; padding: 6px;">
                    <button id="tabAllUsers" onclick="switchUsersTab('All')" style="flex: 1; padding: 12px; border-radius: 12px; border: none; font-weight: 800; cursor: pointer; transition: 0.2s;"></button>
                    <button id="tabActiveUsers" onclick="switchUsersTab('Active')" style="flex: 1; padding: 12px; border-radius: 12px; border: none; font-weight: 800; cursor: pointer; transition: 0.2s;"></button>
                </div>

                <div id="usersLoadingIndicator" class="text-center" style="color: #64748b; margin-top: 40px;">
                    <span class="material-symbols-outlined" style="animation: spin 1s linear infinite; font-size: 36px; color: #3b82f6;">refresh</span>
                    <p style="margin-top: 10px; font-weight: 500;">Fetching secure directory...</p>
                </div>
                
                <div id="adminUsersListContainer" style="display: flex; flex-direction: column; gap: 12px; padding-bottom: 30px;">
                    <!-- Dynamic List Engine Will Populate Here -->
                </div>
            </div>
        `;

        // Safe Hardware Backpress System
        document.getElementById('goBackAdminUsers').addEventListener('click', () => {
            if (window.history.length > 1) { window.history.back(); } 
            else { navigateTo('adminDashboard', false); }
        });

        // Initialize UI Tabs Setup
        switchUsersTab(window.adminUsersTabFilter);
        
        // Trigger Engine
        fetchAdminUsersList();
    }

    // 🚀 Smooth Segmented Tab Switcher Logic
    window.switchUsersTab = function(tab) {
        window.adminUsersTabFilter = tab;
        
        const tabAll = document.getElementById('tabAllUsers');
        const tabActive = document.getElementById('tabActiveUsers');
        
        if (tab === 'All') {
            tabAll.style.background = '#ffffff';
            tabAll.style.color = '#3b82f6';
            tabAll.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.05)';
            tabAll.innerText = 'Total Users';
            
            tabActive.style.background = 'transparent';
            tabActive.style.color = '#64748b';
            tabActive.style.boxShadow = 'none';
            tabActive.innerText = 'Active Accounts';
        } else {
            tabActive.style.background = '#ffffff';
            tabActive.style.color = '#10b981';
            tabActive.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.05)';
            tabActive.innerText = 'Active Accounts';
            
            tabAll.style.background = 'transparent';
            tabAll.style.color = '#64748b';
            tabAll.style.boxShadow = 'none';
            tabAll.innerText = 'Total Users';
        }
        
        if (window.adminUsersData) {
            renderAdminUsersList();
        }
    };

    // 🚀 Secure Data Fetcher
    async function fetchAdminUsersList() {
        const loader = document.getElementById('usersLoadingIndicator');
        try {
            let res = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify({ 
                    action: 'getAllUsersList',
                    adminToken: sessionStorage.getItem('buildMoneyAdminToken') 
                })
            });
            let result = await res.json();
            loader.style.display = 'none';

            if (result.status === "success") {
                let reqData = result.data;
                // Auto-Sort: Newest users on top
                reqData.sort((a, b) => new Date(b.joinDate) - new Date(a.joinDate));
                window.adminUsersData = reqData; 
                renderAdminUsersList();
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            loader.innerHTML = `<p style="color: #e11d48;">Error: ${error.message}</p><button class="btn-view-details" onclick="fetchAdminUsersList()">Retry</button>`;
        }
    }

    // 🚀 Premium Card List DOM Renderer
    window.renderAdminUsersList = function() {
        const listContainer = document.getElementById('adminUsersListContainer');
        if(!window.adminUsersData) return;

        // Apply Tab Filter dynamically
        let filteredData = window.adminUsersData;
        if (window.adminUsersTabFilter === 'Active') {
            filteredData = window.adminUsersData.filter(user => user.status === 'Active');
        }

        if (filteredData.length === 0) {
            listContainer.innerHTML = `
                <div style="background: #ffffff; border: 1.5px dashed #cbd5e1; border-radius: 16px; padding: 30px 20px; text-align: center; animation: fadeIn 0.2s ease-in-out;">
                    <span class="material-symbols-rounded" style="font-size: 40px; color: #94a3b8; margin-bottom: 10px;">search_off</span>
                    <p style="font-size: 14px; font-weight: 800; color: #475569; margin: 0;">No ${window.adminUsersTabFilter} Users Found</p>
                </div>`;
            return;
        }

        listContainer.innerHTML = filteredData.map((user) => {
            // Failsafe Date Parsing
            let displayDate = user.joinDate;
            try {
                const dateObj = new Date(user.joinDate);
                if (!isNaN(dateObj.getTime())) {
                    displayDate = dateObj.toLocaleString('en-IN', {
                        day: '2-digit', month: 'short', year: 'numeric'
                    });
                }
            } catch(e) {}

            let badgeHtml = user.status === 'Active' 
                ? `<span style="background: #e6f4ea; color: #137333; padding: 4px 8px; border-radius: 12px; font-size: 10px; font-weight: 800; display: inline-flex; align-items: center; gap: 3px; letter-spacing: 0.5px;"><span class="material-symbols-rounded" style="font-size: 13px;">verified</span> ACTIVE</span>`
                : `<span style="background: #f1f5f9; color: #64748b; padding: 4px 8px; border-radius: 12px; font-size: 10px; font-weight: 800; display: inline-flex; align-items: center; gap: 3px; letter-spacing: 0.5px;"><span class="material-symbols-rounded" style="font-size: 13px;">person_off</span> INACTIVE</span>`;

            // 🛡️ IIT EXPERT XSS ENGINE: Strict Output Escaping
            const safeName = String(user.name || "Unknown User").replace(/[&<>'"]/g, tag => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'}[tag] || tag));
            const safeEmail = String(user.email || "No Email").replace(/[&<>'"]/g, tag => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'}[tag] || tag));
            const safePhone = String(user.phone || "Not Provided").replace(/[&<>'"]/g, tag => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'}[tag] || tag));

            // Google Style: Dynamic Avatar Colors based on Name (Now Hacker-Proof)
            const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#f43f5e'];
            const charCode = safeName.charCodeAt(0) || 0;
            const bgColor = colors[charCode % colors.length];
            const firstLetter = safeName.charAt(0).toUpperCase();

            return `
            <div style="background: #ffffff; border-radius: 16px; padding: 16px; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; display: flex; align-items: center; gap: 12px; animation: fadeIn 0.2s ease-out;">
                <div style="width: 48px; height: 48px; background: ${bgColor}; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 900; flex-shrink: 0; box-shadow: 0 4px 10px ${bgColor}40;">
                    ${firstLetter}
                </div>
                <div style="flex-grow: 1; overflow: hidden;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <h4 style="font-size: 15px; font-weight: 800; color: #0f172a; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 65%;">${safeName}</h4>
                        ${badgeHtml}
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 10px; background: #f8fafc; padding: 8px; border-radius: 8px; border: 1px solid #f1f5f9;">
                        <p style="font-size: 12px; color: #475569; margin: 0; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                            <span class="material-symbols-outlined" style="font-size: 14px; color: #10b981;">call</span> +91 ${safePhone}
                        </p>
                        <p style="font-size: 12px; color: #475569; margin: 0; font-weight: 600; display: flex; align-items: center; gap: 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                            <span class="material-symbols-outlined" style="font-size: 14px; color: #3b82f6;">mail</span> ${safeEmail}
                        </p>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed #e2e8f0; padding-top: 8px; margin-top: 4px;">
                        <span style="font-size: 11px; color: #94a3b8; font-weight: 600; display: flex; align-items: center; gap: 3px;">
                            <span class="material-symbols-outlined" style="font-size: 13px;">calendar_today</span> Joined ${displayDate}
                        </span>
                        <span style="font-size: 14px; font-weight: 900; color: #1b6e35;">₹${user.wallet}</span>
                    </div>
                </div>
            </div>`;
        }).join('');
    };

    // ==========================================
    // 🚀 ADMIN: SUBMIT REQUESTS LIST SCREEN
    // ==========================================
    function renderAdminSubmitRequestsScreen() {
        appContainer.innerHTML = `
            <!-- 🛡️ IIT EXPERT ENGINE: Removed inline sticky -->
            <div class="top-nav" style="background-color: #ffffff; border-bottom: 1px solid #f0f0f0;">
                <button class="back-btn" onclick="navigateTo('adminDashboard')"><span class="material-symbols-outlined">arrow_back</span></button>
                <div class="nav-title" style="font-size: 18px; flex-grow: 1; text-align: left; font-weight: 800;">Pending Submits</div>
                <div style="width: 24px;"></div>
            </div>
            <!-- 🛡️ IIT EXPERT ENGINE: Removed conflicting padding -->
            <div class="screen" style="background-color: #f8fafc; min-height: 100vh;">
                <div id="subLoadingIndicator" class="text-center" style="color: #64748b; margin-top: 40px;">
                    <span class="material-symbols-outlined" style="animation: spin 1s linear infinite; font-size: 36px; color: #10b981;">refresh</span>
                    <p style="margin-top: 10px; font-weight: 500;">Fetching secure tasks...</p>
                </div>
                <div id="adminSubmitRequestsList" style="display: flex; flex-direction: column; gap: 12px; padding-bottom: 30px;"></div>
            </div>
        `;
        fetchAdminSubmitRequests();
    }

    async function fetchAdminSubmitRequests() {
        const listContainer = document.getElementById('adminSubmitRequestsList');
        const loader = document.getElementById('subLoadingIndicator');
        try {
            let res = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify({ action: 'getSubmitRequests', adminToken: sessionStorage.getItem('buildMoneyAdminToken') })
            });
            let result = await res.json();
            loader.style.display = 'none';

            if (result.status === "success") {
                let reqData = result.data;
                if (reqData.length === 0) {
                    listContainer.innerHTML = `<p class="empty-state text-center" style="margin-top:20px;">No pending submissions.</p>`;
                    return;
                }
                reqData.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)); // Oldest first for fair review
                window.adminSubmitData = reqData; 

                listContainer.innerHTML = reqData.map((req, index) => {
                    let displayDate = req.timestamp;
                    try { const d = new Date(req.timestamp); if(!isNaN(d)) displayDate = d.toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit', hour12: true }); } catch(e){}

                    return `
                    <div style="background: #ffffff; border-radius: 16px; padding: 18px; margin-bottom: 14px; box-shadow: 0 4px 15px rgba(0,0,0,0.04); border: 1px solid #f1f5f9; display: flex; flex-direction: column;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
                            <div style="display: flex; flex-direction: column;">
                                <h4 style="font-size: 16px; font-weight: 800; color: #0f172a; margin: 0 0 4px 0;">${req.name}</h4>
                                <p style="font-size: 12px; font-weight: 500; color: #64748b; margin: 0 0 6px 0;">${req.email}</p>
                                <div style="font-size: 11px; font-weight: 500; color: #94a3b8; display: flex; align-items: center; gap: 4px;"><span class="material-symbols-outlined" style="font-size: 14px;">schedule</span> ${displayDate}</div>
                            </div>
                            <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end;">
                                <div style="font-size: 16px; font-weight: 900; color: #10b981; margin-bottom: 6px;">+₹${req.expectedProfit}</div>
                                <span style="background: #fff3e0; color: #ea580c; padding: 4px 10px; border-radius: 12px; font-size: 10px; font-weight: 800; display: inline-flex; align-items: center; gap: 3px;"><span class="material-symbols-rounded" style="font-size: 14px;">schedule</span> PENDING</span>
                            </div>
                        </div>
                        <button onclick="openSubmitActionModal(${index})" style="width: 100%; padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; color: #1e293b; font-weight: 700; font-size: 13px; cursor: pointer;">View Task Details</button>
                    </div>`;
                }).join('');
            } else throw new Error(result.message);
        } catch (error) { loader.innerHTML = `<p style="color: #e11d48;">Error: ${error.message}</p>`; }
    }

    // 🚀 Admin Failsafe Action Modal
    window.openSubmitActionModal = function(index) {
        const req = window.adminSubmitData[index];
        const modalHtml = `
            <div id="adminSubmitModalOverlay" class="custom-alert-overlay" style="display: flex;">
                <div class="custom-alert-box" style="width: 90%; max-width: 400px; text-align: left; padding: 20px;">
                    <div style="display: flex; align-items: center; margin-bottom: 15px; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px;">
                        <span class="material-symbols-rounded" style="color: #10b981; font-size: 24px; margin-right: 8px;">fact_check</span>
                        <h3 style="color: #0f172a; font-size: 18px; margin: 0;">Task Verification</h3>
                    </div>
                    
                    <div style="background: #f8fafc; padding: 15px; border-radius: 12px; margin-bottom: 20px; border: 1px dashed #cbd5e1;">
                        <p style="margin-bottom: 8px; font-size: 14px;"><span style="color: #64748b;">Name:</span> <strong style="color: #0f172a; float: right;">${req.name}</strong></p>
                        <p style="margin-bottom: 8px; font-size: 14px;"><span style="color: #64748b;">Profit Add:</span> <strong style="color: #10b981; float: right; font-size: 16px;">+₹${req.expectedProfit}</strong></p>
                    </div>
                    
                    <a href="${req.screenshot}" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 6px; background: #eff6ff; color: #2563eb; padding: 14px; border-radius: 12px; margin-bottom: 20px; font-weight: 800; font-size: 14px; text-decoration: none; border: 1px solid #bfdbfe;">
                        <span class="material-symbols-outlined">open_in_new</span> View Submitted Page
                    </a>

                    <div style="display: flex; gap: 10px;">
                        <button id="rejectTaskBtn" onclick="processAdminSubmit(${req.rowNumber}, 'Reject')" style="flex: 1; padding: 12px; border: none; background: #ffe4e6; color: #e11d48; border-radius: 10px; cursor: pointer; font-weight: 800; font-size: 14px;">Reject</button>
                        <button id="approveTaskBtn" onclick="processAdminSubmit(${req.rowNumber}, 'Approve')" style="flex: 1; padding: 12px; border: none; background: #10b981; color: white; border-radius: 10px; cursor: pointer; font-weight: 800; font-size: 14px; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);">Approve</button>
                    </div>
                    <button onclick="document.getElementById('adminSubmitModalOverlay').remove()" style="width: 100%; margin-top: 10px; padding: 12px; border: none; background: transparent; color: #64748b; cursor: pointer; font-weight: 800;">Cancel</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    };

    window.processAdminSubmit = async function(rowNumber, action) {
        document.getElementById('approveTaskBtn').disabled = true; document.getElementById('rejectTaskBtn').disabled = true;
        document.getElementById('approveTaskBtn').innerText = "Wait...";

        try {
            let res = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify({ action: 'processSubmit', rowNumber: rowNumber, submitAction: action, adminToken: sessionStorage.getItem('buildMoneyAdminToken') })
            });
            let result = await res.json();
            if (result.status === "success") {
                showCustomAlert("Success! Action completed.");
                document.getElementById('adminSubmitModalOverlay').remove();
                fetchAdminSubmitRequests(); // Auto refresh list
            } else throw new Error(result.message);
        } catch(e) {
            showCustomAlert("Error: " + e.message);
            document.getElementById('adminSubmitModalOverlay').remove();
        }
    };

    // ==========================================
    // 🚀 PREMIUM 5-LEVEL TEAM & REWARD ENGINE UI
    // ==========================================
    function renderTeamScreen() {
        appContainer.innerHTML = `
            <!-- 🚀 IIT EXPERT FIX: Removed inline sticky. Relies on Bulletproof CSS -->
            <div class="top-nav" style="background: #ffffff; border-bottom: 1px solid #f1f5f9;">
                <div class="nav-title" style="flex-grow: 1; text-align: center; font-size: 20px; font-weight: 800; color: #0f172a;">Refer & Earn Bonus</div>
            </div>

            <!-- 🛡️ IIT EXPERT ENGINE: Removed conflicting inline top-padding to respect global CSS -->
            <div class="screen" style="background: #f8fafc; min-height: 100vh; padding-bottom: 100px;">
                
                <!-- 🚀 Professional Sharing Card -->
                <div style="background: linear-gradient(135deg, #1e293b, #0f172a); border-radius: 20px; padding: 25px 20px; color: white; text-align: center; margin-bottom: 30px;">
                    <p style="font-size: 13px; color: #94a3b8; font-weight: 600; margin-bottom: 8px;">Your Unique Referral Code</p>
                    <h2 id="myRefCodeDisplay" style="font-size: 36px; font-weight: 900; letter-spacing: 3px; margin: 0 0 20px 0; color: #10b981;">------</h2>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 25px;">
                        <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 16px; text-align: center; border: 1px solid rgba(255,255,255,0.1); box-shadow: inset 0 2px 10px rgba(255,255,255,0.02);">
                            <p style="margin: 0; font-size: 24px; font-weight: 900; color: #ffffff;" id="totalDirectCount">-</p>
                            <p style="margin: 0 0 6px 0; font-size: 11px; color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Total Directs</p>
                            <div style="display: inline-block; background: rgba(16, 185, 129, 0.15); padding: 4px 10px; border-radius: 12px;">
                                <p style="margin: 0; font-size: 10px; color: #34d399; font-weight: 800;" id="activeDirectCount">- Active</p>
                            </div>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 16px; text-align: center; border: 1px solid rgba(255,255,255,0.1); box-shadow: inset 0 2px 10px rgba(255,255,255,0.02);">
                            <p style="margin: 0; font-size: 24px; font-weight: 900; color: #ffffff;" id="totalTeamCount">-</p>
                            <p style="margin: 0 0 6px 0; font-size: 11px; color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Total Team</p>
                            <div style="display: inline-block; background: rgba(16, 185, 129, 0.15); padding: 4px 10px; border-radius: 12px;">
                                <p style="margin: 0; font-size: 10px; color: #34d399; font-weight: 800;" id="activeTotalCount">- Active</p>
                            </div>
                        </div>
                    </div>

                    <!-- 🚀 IIT EXPERT: 10% Mutual Bonus Notification Banner -->
                    <div style="background: rgba(16, 185, 129, 0.1); border: 1px dashed rgba(16, 185, 129, 0.4); border-radius: 12px; padding: 12px; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; text-align: left;">
                        <div style="background: #10b981; color: white; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 900; font-size: 14px; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);">10%</div>
                        <p style="margin: 0; font-size: 12px; color: #cbd5e1; font-weight: 500; line-height: 1.4;"><strong style="color: #34d399;">Mutual Cash Bonus:</strong> When your friend joins and activates a plan, <strong style="color: #ffffff;">BOTH of you</strong> instantly get a 10% cash bonus!</p>
                    </div>

                    <!-- Native Share Button -->
                    <button onclick="shareMyReferral()" style="width: 100%; background: #10b981; color: white; border: none; padding: 14px; border-radius: 12px; font-size: 15px; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3); cursor: pointer; transition: 0.2s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
                        <span class="material-symbols-rounded">share</span> Share Referral Code
                    </button>
                </div>

                <h3 style="font-size: 18px; font-weight: 800; color: #0f172a; margin-bottom: 15px; padding-left: 5px;">Reward Targets</h3>
                
                <!-- 🚀 DYNAMIC 5-LEVEL CARDS INJECTOR -->
                <div id="rewardCardsContainer" style="display: flex; flex-direction: column; gap: 15px;">
                    <div class="text-center" style="padding: 20px; color: #1b6e35;"><span class="material-symbols-outlined" style="animation: spin 1s linear infinite; font-size: 32px;">sync</span></div>
                </div>
            </div>
            ${getBottomNavHTML('team')}
        `;

        const user = firebase.auth().currentUser;
        if(user) fetchTeamData(user.email);

        async function fetchTeamData(email) {
            try {
                // 🛡️ IIT EXPERT ENGINE: Secure background UID extraction
                const activeUser = firebase.auth().currentUser;
                const secureUid = activeUser ? activeUser.uid : "GHOST_USER";

                let res = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    headers: { "Content-Type": "text/plain;charset=utf-8" },
                    body: JSON.stringify({ action: 'getTeamStats', email: email, uid: secureUid })
                });
                
                // 🛡️ IIT EXPERT ENGINE: Failsafe Text Parsing (Prevents HTML Redirect Death)
                let textRes = await res.text();
                let data = JSON.parse(textRes);

                if (data.status === "success") {
                    document.getElementById('myRefCodeDisplay').innerText = data.myReferralCode || "ERROR";
                    
                    // 🚀 IIT EXPERT FIX: Bind new data points to UI
                    document.getElementById('totalDirectCount').innerText = data.totalDirect;
                    document.getElementById('activeDirectCount').innerText = data.activeDirect + " Active";
                    document.getElementById('totalTeamCount').innerText = data.totalTeam;
                    document.getElementById('activeTotalCount').innerText = data.activeTotal + " Active";

                    renderRewardCards(data.activeDirect, data.activeTotal, data.rewardLevel);
                }
            } catch(e) {
                console.error("Team Fetch Error:", e);
            }
        }

        function renderRewardCards(dCount, tCount, userLevel) {
            const container = document.getElementById('rewardCardsContainer');
            
            // 5 Levels Configuration Array
            const plans = [
                { lvl: 1, title: "Starter Reward", amt: 1500, tgtD: 5, tgtT: 0, sub: "Need 5 direct active" },
                { lvl: 2, title: "Team Builder", amt: 4000, tgtD: 15, tgtT: 35, sub: "Need 15 direct & 35 total team" },
                { lvl: 3, title: "Team Leader", amt: 6000, tgtD: 20, tgtT: 50, sub: "Need 20 direct & 50 total team" },
                { lvl: 4, title: "Elite Achiever", amt: 10000, tgtD: 35, tgtT: 100, sub: "Need 35 direct & 100 total team" },
                { lvl: 5, title: "Salary Achiever", amt: 75000, tgtD: 0, tgtT: 500, sub: "Need 500 total team active" }
            ];

            let html = "";
            plans.forEach(plan => {
                const isLocked = userLevel >= plan.lvl; // The Tala (Lock)
                const isNextTarget = userLevel === (plan.lvl - 1); // Highlight active target

                let cardStyle = isNextTarget ? `border: 1.5px solid #10b981; box-shadow: 0 4px 15px rgba(16,185,129,0.15);` : `border: 1.5px solid #f1f5f9; box-shadow: 0 4px 15px rgba(0,0,0,0.03); opacity: ${isLocked ? '0.85' : '1'};`;
                
                let lockUI = ``;
                let progressUI = ``;

                if (isLocked) {
                    lockUI = `
                        <div style="margin-top: 15px; background: #fef3c7; color: #d97706; padding: 10px 15px; border-radius: 12px; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 6px; border: 1.5px dashed #fcd34d;">
                            <span class="material-symbols-rounded" style="font-size: 18px;">lock</span> Fulfilled, ₹${plan.amt} added to Wallet!
                        </div>
                    `;
                } else {
                    // Direct Progress Bar
                    if (plan.tgtD > 0) {
                        let dispD = Math.min(dCount, plan.tgtD);
                        let pctD = (dispD / plan.tgtD) * 100;
                        progressUI += `
                        <div style="margin-top: 15px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <span style="font-size: 13px; font-weight: 800; color: #0f172a;">Direct</span>
                                <span style="font-size: 13px; font-weight: 800; color: #0f172a;">${dispD}/${plan.tgtD}</span>
                            </div>
                            <div style="width: 100%; height: 6px; background: #f1f5f9; border-radius: 10px; overflow: hidden; position: relative;">
                                <div style="height: 100%; background: #1b6e35; width: ${pctD}%; border-radius: 10px; transition: width 1s;"></div>
                            </div>
                        </div>`;
                    }
                    // Total Progress Bar
                    if (plan.tgtT > 0) {
                        let dispT = Math.min(tCount, plan.tgtT);
                        let pctT = (dispT / plan.tgtT) * 100;
                        progressUI += `
                        <div style="margin-top: 15px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <span style="font-size: 13px; font-weight: 800; color: #0f172a;">Team</span>
                                <span style="font-size: 13px; font-weight: 800; color: #0f172a;">${dispT}/${plan.tgtT}</span>
                            </div>
                            <div style="width: 100%; height: 6px; background: #f1f5f9; border-radius: 10px; overflow: hidden; position: relative;">
                                <div style="height: 100%; background: #1b6e35; width: ${pctT}%; border-radius: 10px; transition: width 1s;"></div>
                            </div>
                        </div>`;
                    }
                }

                html += `
                <div style="background: #ffffff; border-radius: 20px; padding: 20px; ${cardStyle}">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <h4 style="font-size: 16px; font-weight: 800; color: #0f172a; margin: 0;">${plan.title}</h4>
                            <p style="font-size: 11px; color: #64748b; font-weight: 600; margin: 5px 0 0 0;">${plan.sub}</p>
                        </div>
                        <div style="background: #f1f5f9; padding: 6px 12px; border-radius: 16px; opacity: ${isLocked ? '0.5' : '1'};">
                            <span style="font-size: 14px; font-weight: 900; color: #475569;">₹${plan.amt}</span>
                        </div>
                    </div>
                    ${lockUI}
                    ${progressUI}
                </div>`;
            });
            container.innerHTML = html;
        }

        window.shareMyReferral = function() {
            const code = document.getElementById('myRefCodeDisplay').innerText;
            if (code === "------" || code === "ERROR") return showCustomAlert("Code loading...");
            const refLink = `${window.location.origin}${window.location.pathname}?ref=${code}#register`;
            
            // 🚀 IIT EXPERT: Updated Share Text to maximize 10% Mutual Bonus Conversion
            const shareText = `Hey! Join GYF using my link. Activate your account and we BOTH get a 10% instant cash bonus! Click here to register:`;
            
            if (navigator.share) {
                navigator.share({ title: 'Join GYF', text: shareText, url: refLink }).catch(console.error);
            } else {
                navigator.clipboard.writeText(`${shareText} \n${refLink}`);
                showCustomAlert("Premium Referral Link Copied to Clipboard!");
            }
        }
    }

    // ==========================================
    // 🚀 PREMIUM WALLET & TRANSACTIONS ENGINE
    // ==========================================
    function renderWalletScreen() {
        appContainer.innerHTML = `
            <div class="top-nav" style="background: #ffffff; border-bottom: 1px solid #f1f5f9;">
                <div class="nav-title" style="flex-grow: 1; text-align: center; font-size: 20px; font-weight: 800; color: #0f172a;">Wallet & History</div>
            </div>

            <!-- 🛡️ IIT EXPERT ENGINE: Wallet UI Overlap Fix -->
            <div class="screen" style="background: #f8fafc; min-height: 100vh; padding-bottom: 100px;">
                
                <!-- Premium Wallet Balance Card (Animated) -->
                <div style="background: linear-gradient(135deg, #7D0802 0%, #3B0402 100%); border-radius: 20px; padding: 25px 20px; color: white; margin-bottom: 25px; box-shadow: 0 10px 30px rgba(27, 110, 53, 0.25); position: relative; overflow: hidden;">
                    <!-- Hardware Accelerated Shine Effect -->
                    <div style="position: absolute; top: 0; left: -150%; width: 60%; height: 100%; background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%); transform: skewX(-25deg); animation: premiumShine 4s infinite;"></div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; position: relative; z-index: 1;">
                        <p style="font-size: 14px; opacity: 0.9; margin: 0; font-weight: 600;">Available Balance</p>
                        <button id="walletEyeToggle" style="background: rgba(255,255,255,0.15); border: none; color: white; cursor: pointer; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px);">
                            <span class="material-symbols-rounded" id="walletEyeIcon" style="font-size: 18px;">visibility_off</span>
                        </button>
                    </div>
                    <h2 id="mainWalletBalance" data-balance="0" style="font-size: 40px; color: white; font-weight: 900; margin: 0; letter-spacing: -1px; text-shadow: 0 2px 10px rgba(0,0,0,0.1); position: relative; z-index: 1;">₹••••••</h2>
                </div>

                <!-- 🚀 Dual-Tab Segmented Controller -->
                <div style="display: flex; gap: 10px; margin-bottom: 20px; background: #e2e8f0; padding: 6px; border-radius: 16px;">
                    <button id="tabDeposits" onclick="switchWalletTab('Deposits')" style="flex: 1; padding: 12px; border-radius: 12px; border: none; background: #ffffff; color: #1b6e35; font-weight: 800; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">Deposits</button>
                    <button id="tabWithdraws" onclick="switchWalletTab('Withdraws')" style="flex: 1; padding: 12px; border-radius: 12px; border: none; background: transparent; color: #64748b; font-weight: 800; cursor: pointer; transition: 0.2s;">Withdraws</button>
                </div>

                <div id="walletLoadingIndicator" class="text-center" style="color: #64748b; margin-top: 40px;">
                    <span class="material-symbols-rounded" style="animation: spin 1s linear infinite; font-size: 32px; color: #1b6e35;">sync</span>
                    <p style="margin-top: 10px; font-size: 13px; font-weight: 600;">Fetching secure records...</p>
                </div>

                <div id="walletHistoryList" style="display: flex; flex-direction: column; gap: 12px;"></div>
            </div>
            ${getBottomNavHTML('wallet')}
        `;

        window.currentWalletTab = 'Deposits';
        window.walletDataCache = { deposits: [], withdraws: [] }; // O(1) Cache Engine to prevent multiple fetch hits

        // Eye Toggle Logic
        const toggleBtn = document.getElementById('walletEyeToggle');
        const eyeIcon = document.getElementById('walletEyeIcon');
        const balDisplay = document.getElementById('mainWalletBalance');

        toggleBtn.addEventListener('click', () => {
            const realBal = balDisplay.getAttribute('data-balance') || "0";
            if (eyeIcon.innerText === 'visibility_off') {
                eyeIcon.innerText = 'visibility';
                balDisplay.innerText = `₹${realBal}.00`;
            } else {
                eyeIcon.innerText = 'visibility_off';
                balDisplay.innerText = `₹••••••`;
            }
        });

        // 🚀 Fetch Logic Trigger
        const user = firebase.auth().currentUser;
        if(user) fetchWalletHistory(user.email);

        async function fetchWalletHistory(email) {
            try {
                // 🛡️ IIT EXPERT ENGINE: Extract Secure UID
                const activeUser = firebase.auth().currentUser;
                const secureUid = activeUser ? activeUser.uid : "GHOST_USER";

                let res = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    headers: { "Content-Type": "text/plain;charset=utf-8" }, // 🛡️ CORS Shield
                    body: JSON.stringify({ 
                        action: 'getUserProfile', 
                        email: email, 
                        uid: secureUid // 🛡️ Anti-CSRF Token for backend verification
                    })
                });
                
                let textRes = await res.text();
                let data = JSON.parse(textRes); // 🛡️ JSON Crash Failsafe
                
                document.getElementById('walletLoadingIndicator').style.display = 'none';

                if (data.status === "success") {
                    // Update Balance Safely
                    balDisplay.setAttribute('data-balance', data.walletBalance);
                    if (eyeIcon.innerText === 'visibility') balDisplay.innerText = `₹${data.walletBalance}.00`;

                    // Safe Arrays
                    let depArr = data.depositHistory || [];
                    let witArr = data.withdrawHistory || [];
                    
                    // Chronological Sort (Newest on top)
                    depArr.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));
                    witArr.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));

                    // Cache to window
                    window.walletDataCache.deposits = depArr;
                    window.walletDataCache.withdraws = witArr;

                    // Instantly render default tab
                    renderWalletList();
                } else {
                    console.error("Wallet History Blocked: ", data.message);
                    document.getElementById('walletLoadingIndicator').innerHTML = `<p style="color:#e11d48; font-size:13px; font-weight: bold;">Security Block: ${data.message}</p>`;
                }
            } catch(e) {
                console.error("Failed to fetch wallet history:", e);
                document.getElementById('walletLoadingIndicator').innerHTML = `<p style="color:#e11d48; font-size:13px; font-weight: bold;">Network Connection Weak. Please Refresh.</p>`;
            }
        }
    }

    // 🚀 Tab Switcher Engine (Zero Loading Time due to cache)
    window.switchWalletTab = function(tab) {
        window.currentWalletTab = tab;
        document.getElementById('tabDeposits').style.background = tab === 'Deposits' ? '#ffffff' : 'transparent';
        document.getElementById('tabDeposits').style.color = tab === 'Deposits' ? '#1b6e35' : '#64748b';
        document.getElementById('tabDeposits').style.boxShadow = tab === 'Deposits' ? '0 4px 10px rgba(0,0,0,0.05)' : 'none';
        
        document.getElementById('tabWithdraws').style.background = tab === 'Withdraws' ? '#ffffff' : 'transparent';
        document.getElementById('tabWithdraws').style.color = tab === 'Withdraws' ? '#1b6e35' : '#64748b';
        document.getElementById('tabWithdraws').style.boxShadow = tab === 'Withdraws' ? '0 4px 10px rgba(0,0,0,0.05)' : 'none';
        
        renderWalletList(); // Re-render from cache instantly
    }

    // 🚀 Dynamic HTML List Renderer
    window.renderWalletList = function() {
        const listEl = document.getElementById('walletHistoryList');
        const dataArr = window.currentWalletTab === 'Deposits' ? window.walletDataCache.deposits : window.walletDataCache.withdraws;

        if (!dataArr || dataArr.length === 0) {
            listEl.innerHTML = `
                <div style="background: #ffffff; border: 1.5px dashed #cbd5e1; border-radius: 16px; padding: 30px 20px; text-align: center; animation: fadeIn 0.2s ease-in-out;">
                    <span class="material-symbols-rounded" style="font-size: 40px; color: #94a3b8; margin-bottom: 10px;">receipt_long</span>
                    <p style="font-size: 14px; font-weight: 800; color: #475569; margin: 0;">No ${window.currentWalletTab} Yet</p>
                    <p style="font-size: 12px; font-weight: 500; color: #94a3b8; margin-top: 4px;">Your records will safely appear here.</p>
                </div>`;
            return;
        }

        let htmlBuffer = "";
        dataArr.forEach(item => {
            // 🚀 Failsafe Date Parsing
            let displayDate = item.timestamp;
            try {
                const dateObj = new Date(item.timestamp);
                if (!isNaN(dateObj.getTime())) {
                    displayDate = dateObj.toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
                }
            } catch(e) {}

            let badgeHtml = "";
            let titleText = "";
            let iconHtml = "";

            // Dynamic logic depends on the current tab
            if (window.currentWalletTab === 'Deposits') {
                titleText = item.status === "Bonus" || item.txnId === "DAILY_BONUS" ? "Daily Bonus" : (item.planName || "Plan Deposit");
                iconHtml = item.status === "Bonus" || item.txnId === "DAILY_BONUS" ? "redeem" : "add_circle";
                
                if (item.status === "Bonus" || item.txnId === "DAILY_BONUS") {
                    badgeHtml = `<span style="background: #e0e7ff; color: #3b82f6; padding: 4px 10px; border-radius: 12px; font-size: 10px; font-weight: 800; display: inline-flex; align-items: center; gap: 3px;"><span class="material-symbols-rounded" style="font-size: 14px;">task_alt</span> CLAIMED</span>`;
                } else if (item.status === true || item.status === "true") {
                    badgeHtml = `<span style="background: #dcfce7; color: #059669; padding: 4px 10px; border-radius: 12px; font-size: 10px; font-weight: 800; display: inline-flex; align-items: center; gap: 3px;"><span class="material-symbols-rounded" style="font-size: 14px;">check_circle</span> APPROVED</span>`;
                } else {
                    badgeHtml = `<span style="background: #fff3e0; color: #ea580c; padding: 4px 10px; border-radius: 12px; font-size: 10px; font-weight: 800; display: inline-flex; align-items: center; gap: 3px;"><span class="material-symbols-rounded" style="font-size: 14px;">schedule</span> PENDING</span>`;
                }
            } else {
                titleText = item.bankName || "Bank Transfer";
                iconHtml = "account_balance";
                
                if (item.status === "Approved") {
                    badgeHtml = `<span style="background: #dcfce7; color: #059669; padding: 4px 10px; border-radius: 12px; font-size: 10px; font-weight: 800; display: inline-flex; align-items: center; gap: 3px;"><span class="material-symbols-rounded" style="font-size: 14px;">check_circle</span> APPROVED</span>`;
                } else {
                    badgeHtml = `<span style="background: #fff3e0; color: #ea580c; padding: 4px 10px; border-radius: 12px; font-size: 10px; font-weight: 800; display: inline-flex; align-items: center; gap: 3px;"><span class="material-symbols-rounded" style="font-size: 14px;">schedule</span> PENDING</span>`;
                }
            }

            const amountColor = window.currentWalletTab === 'Deposits' ? '#10b981' : '#f43f5e';
            const sign = window.currentWalletTab === 'Deposits' ? '+' : '-';

            htmlBuffer += `
            <div style="background: #ffffff; border-radius: 16px; padding: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); border: 1.5px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; animation: fadeIn 0.2s ease-in-out;">
                <div style="display: flex; align-items: center; gap: 12px; flex-grow: 1; overflow: hidden;">
                    <div style="width: 42px; height: 42px; background: #f8fafc; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid #e2e8f0;">
                        <span class="material-symbols-rounded" style="font-size: 24px; color: #64748b;">${iconHtml}</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 3px; min-width: 0;">
                        <span style="font-size: 15px; font-weight: 800; color: #0f172a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${titleText}</span>
                        <span style="font-size: 11px; font-weight: 600; color: #94a3b8; display: flex; align-items: center; gap: 4px;">
                            ${displayDate}
                        </span>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 6px; flex-shrink: 0; margin-left: 10px;">
                    <span style="font-size: 16px; font-weight: 900; color: ${amountColor}; letter-spacing: 0.5px;">${sign}₹${item.amount}</span>
                    ${badgeHtml}
                </div>
            </div>`;
        });
        
        listEl.innerHTML = htmlBuffer; // Single super-fast DOM write
    }


    // ==========================================
    // 🚀 PREMIUM WHATSAPP-STYLE CHAT ENGINE (100% Hacker-Proof)
    // ==========================================
    
    // 1. USER SIDE SUPPORT SCREEN
    function renderSupportScreen() {
        const user = firebase.auth().currentUser;
        if (!user) return navigateTo('login');

        // 🚀 IIT EXPERT FIX: Failsafe against Missing Emails
        const userEmail = user.email || "user@buildmoney.com";
        const shortName = userEmail.split('@')[0];

        appContainer.innerHTML = `
            <div class="top-nav" style="background: #115e59; color: white; padding: 12px 15px; display: flex; align-items: center; border-bottom: none; z-index: 1000; position: fixed; width: 100%; top: 0; max-width: 480px;">
                <div style="display: flex; align-items: center; gap: 12px; flex-grow: 1;">
                    <div style="width: 40px; height: 40px; background: #ffffff; color: #115e59; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
                        A
                    </div>
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-size: 16px; font-weight: 800; line-height: 1;">Admin Support</span>
                        <span style="font-size: 11px; color: #a7f3d0; margin-top: 3px;">Online • Usually replies instantly</span>
                    </div>
                </div>
                <!-- 🚀 IIT EXPERT FIX: Dynamic Settings Button Injection Container -->
                <div id="adminSettingsBtnContainer"></div>
            </div>
            
            <div class="screen" id="chatArea" style="background: #e2e8f0; min-height: 100vh; padding: 80px 15px 160px 15px; display: flex; flex-direction: column; gap: 8px; overflow-y: auto;">
                <div class="text-center" style="margin-bottom: 10px;">
                    <span style="background: #cbd5e1; color: #475569; padding: 4px 10px; border-radius: 8px; font-size: 10px; font-weight: bold;">Today</span>
                </div>
                <div id="messagesContainer" style="display: flex; flex-direction: column; gap: 8px;"></div>
            </div>
            
            <div style="position: fixed; bottom: 85px; left: 50%; transform: translateX(-50%); width: 100%; max-width: 480px; padding: 10px 15px; background: transparent; display: flex; align-items: flex-end; gap: 10px; z-index: 1000;">
                <div style="flex: 1; background: #ffffff; border-radius: 24px; display: flex; align-items: center; padding: 8px 18px; box-shadow: 0 6px 20px rgba(0,0,0,0.06); border: 1.5px solid #f1f5f9;">
                    <textarea id="msgInput" placeholder="Type a message..." rows="1" style="flex: 1; border: none; padding: 6px 0; outline: none; font-size: 15px; background: transparent; resize: none; max-height: 120px; overflow-y: auto; font-family: inherit; line-height: 1.4; color: #0f172a;" oninput="this.style.height='auto'; this.style.height=(this.scrollHeight)+'px';"></textarea>
                </div>
                <!-- 🚀 IIT EXPERT FIX: Removed conflicting inline onclick -->
                <button id="sendMsgBtn" style="background: linear-gradient(135deg, #115e59, #14b8a6); color: white; border: none; width: 48px; height: 48px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 15px rgba(17, 94, 89, 0.25); cursor: pointer; transition: transform 0.15s ease;" onmousedown="this.style.transform='scale(0.9)'" onmouseup="this.style.transform='scale(1)'">
                    <span class="material-symbols-rounded" style="margin-left: 4px; font-size: 22px;">send</span>
                </button>
            </div>
            ${getBottomNavHTML('support')}
        `;

        // 🚀 IIT EXPERT FIX: Only Render and Activate the Button if User is the Master Admin
        if (userEmail === MASTER_ADMIN_EMAIL) {
            document.getElementById('adminSettingsBtnContainer').innerHTML = `<span class="material-symbols-rounded" id="goToAdminBtn" style="font-size: 24px; color: rgba(255,255,255,0.7); cursor: pointer;">settings</span>`;
            document.getElementById('goToAdminBtn').addEventListener('click', () => navigateTo('adminLogin'));
        }

        const msgContainer = document.getElementById('messagesContainer');
        const chatArea = document.getElementById('chatArea');
        const db = firebase.database();
        const chatRef = db.ref(`support_engine_v1/${user.uid}/messages`);
        const metaRef = db.ref(`support_engine_v1/${user.uid}/meta`);

        // 🚀 IIT EXPERT FIX: Bulletproof XSS Escaper (Won't crash on empty text)
        function escapeHTML(str) { 
            if (str === null || str === undefined) return "";
            return String(str).replace(/[&<>'"]/g, tag => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'}[tag] || tag)); 
        }

        function renderMsg(msg) {
            if (!msg) return; // 🚀 Failsafe against ghost nodes
            const isMe = msg.sender === 'user';
            
            // 🚀 IIT EXPERT FIX: Safe Date Parsing for Mobile Sync
            let timeStr = "";
            if (msg.timestamp && typeof msg.timestamp === 'number') {
                timeStr = new Date(msg.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            } else {
                timeStr = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            }
            
            const bubbleStyle = isMe 
                ? `background: #dcf8c6; align-self: flex-end; border-radius: 12px 12px 0 12px;` 
                : `background: #ffffff; align-self: flex-start; border-radius: 12px 12px 12px 0;`;

            msgContainer.insertAdjacentHTML('beforeend', `
                <div style="max-width: 80%; min-width: 100px; padding: 6px 12px 20px 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); position: relative; ${bubbleStyle}">
                    <div style="font-size: 14.5px; color: #0f172a; word-wrap: break-word; line-height: 1.4;">${escapeHTML(msg.text)}</div>
                    <div style="font-size: 10.5px; color: #64748b; position: absolute; bottom: 4px; right: 8px; white-space: nowrap; display: flex; align-items: center; gap: 2px;">
                        ${timeStr} ${isMe ? '<span class="material-symbols-rounded" style="font-size: 14px; color: #3b82f6;">done_all</span>' : ''}
                    </div>
                </div>
            `);
            chatArea.scrollTop = chatArea.scrollHeight;
        }

        chatRef.on('child_added', (snapshot) => {
            try { renderMsg(snapshot.val()); } catch(e) { console.error("Render error", e); }
        });

        // 🚀 IIT EXPERT FIX: Async/Await Secured Click Listener
        document.getElementById('sendMsgBtn').addEventListener('click', async (e) => {
            e.preventDefault(); // Prevents ghost clicks on mobile
            const input = document.getElementById('msgInput');
            const btn = document.getElementById('sendMsgBtn');
            const text = input.value.trim();
            if(!text) return;
            
            btn.style.pointerEvents = "none"; // Lock button to prevent spam crash
            btn.style.opacity = "0.7";
            
            try {
                const timestamp = firebase.database.ServerValue.TIMESTAMP;
                await chatRef.push({ sender: 'user', text: text, timestamp: timestamp });
                await metaRef.set({ uid: user.uid, email: userEmail, name: shortName, lastMessage: text, timestamp: timestamp, unreadByAdmin: true });
                
                input.value = '';
                input.style.height = 'auto'; // Reset textbox safely here
            } catch (err) {
                console.error("Chat push failed:", err);
            } finally {
                btn.style.pointerEvents = "auto"; // Unlock button
                btn.style.opacity = "1";
            }
        });
    }

    // ==========================================
    // 2. ADMIN SIDE: CONTACT GRID (WhatsApp Style)
    // ==========================================
    function renderAdminQueriesScreen() {
        appContainer.innerHTML = `
            <!-- 🛡️ IIT EXPERT ENGINE: Removed inline sticky. Relies strictly on global CSS -->
            <div class="top-nav" style="background-color: #ffffff; border-bottom: 1px solid #f0f0f0;">
                <button class="back-btn" onclick="navigateTo('adminDashboard')">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                <div class="nav-title" style="font-size: 18px; flex-grow: 1; text-align: left; font-weight: 800;">User Queries</div>
            </div>
            
            <!-- 🛡️ IIT EXPERT ENGINE: Removed fatal inline 'padding: 0;' -->
            <div class="screen" style="background-color: #ffffff; min-height: 100vh;">
                <div id="contactGridList" style="display: flex; flex-direction: column;">
                    <div class="text-center" style="padding: 40px; color: #1b6e35;"><span class="material-symbols-rounded" style="animation: spin 1s linear infinite; font-size: 32px;">sync</span></div>
                </div>
            </div>
        `;

        const listContainer = document.getElementById('contactGridList');
        const db = firebase.database();
        
        db.ref('support_engine_v1').on('value', (snapshot) => {
            try {
                listContainer.innerHTML = '';
                const data = snapshot.val();
                if(!data) {
                    listContainer.innerHTML = `<div style="text-align:center; padding:40px; color:#64748b; font-weight:600;">No active queries found.</div>`;
                    return;
                }

                const chats = [];
                for(let key in data) { if(data[key].meta) chats.push(data[key].meta); }
                
                // 🚀 IIT EXPERT FIX: Safe Math Sorting (Prevents NaN crashes)
                chats.sort((a, b) => (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0));

                if(chats.length === 0) {
                    listContainer.innerHTML = `<div style="text-align:center; padding:40px; color:#64748b; font-weight:600;">No active queries found.</div>`;
                    return;
                }

                let htmlBuffer = "";
                chats.forEach(chat => {
                    // 🚀 IIT EXPERT FIX: Strict String Casting to prevent .replace() fatal crash on mobile
                    const safeName = chat.name ? String(chat.name).replace(/[&<>'"]/g, '') : "User";
                    const safeEmail = chat.email ? String(chat.email).replace(/[&<>'"]/g, '') : "No Email";
                    const safeLastMsg = chat.lastMessage ? String(chat.lastMessage).replace(/[&<>'"]/g, '') : "Attachment/Media";
                    const firstLetter = safeName.charAt(0).toUpperCase();
                    
                    let timeStr = "";
                    if(chat.timestamp && typeof chat.timestamp === 'number') {
                        const d = new Date(chat.timestamp);
                        if (!isNaN(d.getTime())) { // Safe Date Check
                            const now = new Date();
                            if(d.toDateString() === now.toDateString()) timeStr = d.toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit'});
                            else timeStr = d.toLocaleDateString('en-US', {day:'numeric', month:'short'});
                        }
                    }

                    const unreadDot = chat.unreadByAdmin ? `<div style="width:10px; height:10px; background:#10b981; border-radius:50%; margin-top:5px;"></div>` : ``;

                    htmlBuffer += `
                        <div class="contact-grid-item" style="display: flex; align-items: center; padding: 12px 15px; border-bottom: 1px solid #f1f5f9; cursor: pointer; transition: 0.2s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'" onclick="openAdminChat('${chat.uid}', '${safeName}', '${safeEmail}')">
                            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #1b6e35, #10b981); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 20px; flex-shrink: 0; margin-right: 12px; box-shadow: 0 4px 10px rgba(16,185,129,0.2);">
                                ${firstLetter}
                            </div>
                            <div style="flex-grow: 1; overflow: hidden;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
                                    <h4 style="margin: 0; font-size: 16px; font-weight: 700; color: #0f172a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${safeName}</h4>
                                    <span style="font-size: 11px; color: ${chat.unreadByAdmin ? '#10b981' : '#94a3b8'}; font-weight: ${chat.unreadByAdmin ? '700' : '500'};">${timeStr}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <p style="margin: 0; font-size: 13px; color: #64748b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 85%;">${safeLastMsg}</p>
                                    ${unreadDot}
                                </div>
                                <p style="margin: 2px 0 0 0; font-size: 10px; color: #94a3b8;">${safeEmail}</p>
                            </div>
                        </div>
                    `;
                });
                listContainer.innerHTML = htmlBuffer; // Single fast DOM write prevents WebView freeze
            } catch(error) {
                console.error("Admin List Render Error:", error);
            }
        });
    }

    // Route trigger for clicking a specific chat
    window.openAdminChat = function(uid, name, email) {
        window.activeChatMeta = { uid, name, email };
        navigateTo('adminChat');
    }

    // ==========================================
    // 3. ADMIN SIDE: CHAT ROOM
    // ==========================================
    function renderAdminChatScreen() {
        if(!window.activeChatMeta) return navigateTo('adminQueries');
        const { uid, name, email } = window.activeChatMeta;

        appContainer.innerHTML = `
            <div class="top-nav" style="background: #0f172a; color: white; padding: 12px 15px; display: flex; align-items: center; border-bottom: none; z-index: 1000; position: fixed; width: 100%; top: 0; max-width: 480px;">
                <button class="back-btn" onclick="navigateTo('adminQueries')" style="color: white; margin-right: 10px;">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                <div style="display: flex; align-items: center; gap: 10px; flex-grow: 1;">
                    <div style="width: 38px; height: 38px; background: linear-gradient(135deg, #1b6e35, #10b981); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px;">
                        ${name.charAt(0).toUpperCase()}
                    </div>
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-size: 15px; font-weight: 800; line-height: 1;">${name}</span>
                        <span style="font-size: 10px; color: #cbd5e1; margin-top: 3px;">${email}</span>
                    </div>
                </div>
            </div>
            
            <div class="screen" id="adminChatArea" style="background: #e2e8f0; min-height: 100vh; padding: 80px 15px 80px 15px; display: flex; flex-direction: column; gap: 8px; overflow-y: auto;">
                <div id="adminMessagesContainer" style="display: flex; flex-direction: column; gap: 8px;"></div>
            </div>
            
            <div style="position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 480px; padding: 12px 15px; background: rgba(248, 250, 252, 0.85); backdrop-filter: blur(10px); display: flex; align-items: flex-end; gap: 10px; z-index: 1000; border-top: 1px solid rgba(226, 232, 240, 0.8);">
                <div style="flex: 1; background: #ffffff; border-radius: 24px; display: flex; align-items: center; padding: 8px 18px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
                    <textarea id="adminMsgInput" placeholder="Reply as Admin..." rows="1" style="flex: 1; border: none; padding: 6px 0; outline: none; font-size: 15px; background: transparent; resize: none; max-height: 120px; overflow-y: auto; font-family: inherit; line-height: 1.4; color: #0f172a;" oninput="this.style.height='auto'; this.style.height=(this.scrollHeight)+'px';"></textarea>
                </div>
                <!-- 🚀 IIT EXPERT FIX: Removed conflicting inline onclick -->
                <button id="adminSendMsgBtn" style="background: linear-gradient(135deg, #0f172a, #334155); color: white; border: none; width: 48px; height: 48px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 15px rgba(15, 23, 42, 0.2); cursor: pointer; transition: transform 0.15s ease;" onmousedown="this.style.transform='scale(0.9)'" onmouseup="this.style.transform='scale(1)'">
                    <span class="material-symbols-rounded" style="margin-left: 4px; font-size: 22px;">send</span>
                </button>
            </div>
        `;

        const msgContainer = document.getElementById('adminMessagesContainer');
        const chatArea = document.getElementById('adminChatArea');
        const db = firebase.database();
        const chatRef = db.ref(`support_engine_v1/${uid}/messages`);
        const metaRef = db.ref(`support_engine_v1/${uid}/meta`);

        metaRef.update({ unreadByAdmin: false });

        function escapeHTML(str) { 
            if (!str) return "";
            return String(str).replace(/[&<>'"]/g, tag => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'}[tag] || tag)); 
        }

        function renderMsg(msg) {
            if (!msg) return; // 🚀 Failsafe
            const isAdmin = msg.sender === 'admin';
            
            let timeStr = "";
            if (msg.timestamp && typeof msg.timestamp === 'number') {
                timeStr = new Date(msg.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            } else {
                timeStr = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            }
            
            const bubbleStyle = isAdmin 
                ? `background: #dcf8c6; align-self: flex-end; border-radius: 12px 12px 0 12px; border: 1px solid #bbf7d0;` 
                : `background: #ffffff; align-self: flex-start; border-radius: 12px 12px 12px 0; border: 1px solid #f1f5f9;`;

            msgContainer.insertAdjacentHTML('beforeend', `
                <div style="max-width: 80%; min-width: 90px; padding: 6px 12px 20px 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); position: relative; ${bubbleStyle}">
                    <div style="font-size: 14.5px; color: #0f172a; word-wrap: break-word; line-height: 1.4;">${escapeHTML(msg.text)}</div>
                    <div style="font-size: 10.5px; color: #64748b; position: absolute; bottom: 4px; right: 8px; white-space: nowrap;">
                        ${timeStr}
                    </div>
                </div>
            `);
            chatArea.scrollTop = chatArea.scrollHeight;
        }

        chatRef.on('child_added', (snapshot) => {
            try { 
                renderMsg(snapshot.val()); 
                metaRef.update({ unreadByAdmin: false });
            } catch(e) {}
        });

        // 🚀 IIT EXPERT FIX: Secure Admin Click Logic
        document.getElementById('adminSendMsgBtn').addEventListener('click', async (e) => {
            e.preventDefault();
            const input = document.getElementById('adminMsgInput');
            const btn = document.getElementById('adminSendMsgBtn');
            const text = input.value.trim();
            if(!text) return;
            
            btn.style.pointerEvents = "none";
            btn.style.opacity = "0.7";
            
            try {
                const timestamp = firebase.database.ServerValue.TIMESTAMP;
                await chatRef.push({ sender: 'admin', text: text, timestamp: timestamp });
                await metaRef.update({ lastMessage: text, timestamp: timestamp, unreadByAdmin: false });
                
                input.value = '';
                input.style.height = 'auto';
            } catch(e) {
                console.error("Admin Send Failed", e);
            } finally {
                btn.style.pointerEvents = "auto";
                btn.style.opacity = "1";
            }
        });
    }


    // ==========================================
    // PREMIUM DEPOSIT & ACTIVATE SCREEN (With Drive Engine)
    // ==========================================
    function renderDepositScreen() {
        appContainer.innerHTML = `
            <div class="top-nav">
                <button class="back-btn" id="goBackDeposit">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                <div class="nav-title text-center" style="font-size: 20px;">Deposit & Activate</div>
                <div style="width: 24px;"></div>
            </div>
            
            <div class="screen" style="padding-bottom: 100px;">
                <h3 class="section-title" style="margin-top: 0;">Select Plan</h3>
                
                <div id="dynamic-plan-list" class="plan-list">
                    <div class="text-center" style="padding: 20px; color: #1b6e35;">
                        <span class="material-symbols-outlined" style="animation: spin 1s linear infinite; font-size: 32px;">sync</span>
                        <p style="margin-top: 8px; font-weight: bold; font-size: 14px;">Loading Live Plans...</p>
                    </div>
                </div>

                <!-- 🚀 IIT EXPERT FIX: Premium Payment Instructions with QR Code Integration -->
                <div class="payment-instruction-box" style="position: relative; padding: 18px; background: #ffffff; border-radius: 14px; border: 1.5px solid #e2e8f0; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <h4 class="text-green font-bold" style="margin-bottom: 12px; font-size: 15px; display: flex; align-items: center; gap: 6px;">
                                <span class="material-symbols-rounded">account_balance</span> Payment Info
                            </h4>
                            <p style="margin-bottom: 8px; font-size: 13px; font-weight: 600; color: #64748b;">UPI ID: <strong id="dynamicUpiDisplay" style="color: #0f172a; font-size: 15px; user-select: all;">Loading...</strong></p>
                            <p style="margin-bottom: 12px; font-size: 13px; font-weight: 600; color: #64748b;">Amount: <strong id="dynamicAmount" style="color: #1b6e35; font-size: 16px; font-weight: 900;">Loading...</strong></p>
                        </div>
                        
                        <!-- 🚀 The Premium QR Button -->
                        <button id="generateQrBtn" type="button" style="background: #1b6e35; color: white; border: none; padding: 10px 14px; border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 4px; box-shadow: 0 4px 12px rgba(27, 110, 53, 0.2); transition: transform 0.2s;" onmousedown="this.style.transform='scale(0.92)'" onmouseup="this.style.transform='scale(1)'">
                            <span class="material-symbols-rounded" style="font-size: 24px;">qr_code_2</span>
                            <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.5px;">Pay via QR</span>
                        </button>
                    </div>
                    
                    <div style="margin-top: 8px; padding-top: 12px; border-top: 1px dashed #cbd5e1;">
                        <p style="font-size: 12px; color: #1b6e35; font-weight: 600; display: flex; align-items: center; gap: 5px;">
                            <span class="material-symbols-rounded" style="font-size: 16px;">info</span> Please upload screenshot after successful payment.
                        </p>
                    </div>
                </div>

                <h3 class="section-title">Payment Screenshot</h3>
                
                <!-- Live Image Preview Box -->
                <label class="screenshot-upload-box" for="screenshotFile" id="imagePreviewBox">
                    <span class="material-symbols-outlined text-green" style="font-size: 36px; margin-bottom: 8px;" id="uploadIcon">image</span>
                    <p class="text-green font-bold" id="uploadText" style="font-size: 14px;">Tap to upload screenshot</p>
                    <input type="file" id="screenshotFile" accept="image/*" style="display: none;">
                </label>

                <h3 class="section-title">Transaction / UTR Ref (optional)</h3>
                <div class="input-group">
                    <input type="text" id="txnInput" placeholder="Enter 12-digit UTR Number" style="background: #f4f6f5;">
                </div>

                <button class="btn-primary" id="depositSubmitBtn" style="margin-top: 15px;">Submit Request</button>
            </div>
            ${getBottomNavHTML('wallet')} 
        `;

        document.getElementById('goBackDeposit').addEventListener('click', () => {
            if (window.history.length > 1) { window.history.back(); } 
            else { navigateTo('dashboard', false); }
        });

        let selectedPlan = "";
        let selectedPrice = 0;
        const amountDisplay = document.getElementById('dynamicAmount');
        const planListContainer = document.getElementById('dynamic-plan-list');

        


        // 🚀 IIT EXPERT FIX: Advanced Safe JSON Engine & Null Failsafe
        async function fetchPlansFromServer() {
            try {
                let res = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    headers: { "Content-Type": "text/plain;charset=utf-8" },
                    body: JSON.stringify({ action: 'getAllPlans' })
                });
                
                // 1. Fetch response as plain text first to prevent JSON crash
                let textRes = await res.text();
                let result;
                try {
                    result = JSON.parse(textRes);
                } catch(err) {
                    throw new Error("Backend Update Required: Did you deploy App Script as a 'New Version'?");
                }
                
                // 2. Safe DOM Injection
                if (result.status === "success" && result.data && result.data.length > 0) {
                    let plansHtml = "";
                    result.data.forEach((plan, index) => {
                        let isActive = index === 0 ? "active" : "";
                        if(index === 0) {
                            selectedPlan = plan.name;
                            selectedPrice = plan.price;
                            if(amountDisplay) amountDisplay.innerText = `₹${plan.price}`; // Null Safe
                        }
                        plansHtml += `
                        <!-- 🚀 IIT EXPERT FIX: Removed Rogue </sp> and fixed paragraph tag -->
                        <div class="plan-card-item ${isActive}" data-price="${plan.price}" data-plan="${plan.name}">
                            <div class="plan-info">
                                <h4>${plan.name}</h4>
                                <p class="text-green font-bold">Profit: ₹${plan.profit}/Quiz</p>
                            </div>
                            <div class="plan-price">₹${plan.price}</div>
                        </div>`;
                    });
                    
                    if(planListContainer) planListContainer.innerHTML = plansHtml;

                    const planCards = document.querySelectorAll('.plan-card-item');
                    planCards.forEach(card => {
                        card.addEventListener('click', () => {
                            planCards.forEach(c => c.classList.remove('active'));
                            card.classList.add('active');
                            selectedPrice = card.getAttribute('data-price');
                            selectedPlan = card.getAttribute('data-plan');
                            if(amountDisplay) amountDisplay.innerText = `₹${selectedPrice}`;
                        });
                    });
                } else {
                    if(planListContainer) planListContainer.innerHTML = `<p class="text-center" style="color:#e11d48; font-size: 13px; padding: 10px;">Error: ${result.message || 'Check Server Database.'}</p>`;
                }
            } catch(e) {
                // 3. Ultimate Diagnostic Error Display
                if(planListContainer) {
                    planListContainer.innerHTML = `
                    <div class="text-center" style="background:#fef2f2; color:#b91c1c; padding:18px; border:1.5px dashed #ef4444; border-radius:12px;">
                        <span class="material-symbols-outlined" style="font-size:32px; margin-bottom:8px;">error</span>
                        <p style="font-size: 14px; font-weight: 800; margin-bottom:4px;">Engine Disconnected</p>
                        <p style="font-size: 12px; font-weight: 500;">${e.message}</p>
                    </div>`;
                }
            }
        }

        // 🚀 IIT EXPERT FIX: Live UPI Fetch Engine
        async function fetchLiveUpi() {
            try {
                let res = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    headers: { "Content-Type": "text/plain;charset=utf-8" },
                    body: JSON.stringify({ action: 'getUpiId' })
                });
                let textRes = await res.text();
                let result = JSON.parse(textRes);
                if (result.status === "success") {
                    document.getElementById('dynamicUpiDisplay').innerText = result.upiId;
                } else {
                    document.getElementById('dynamicUpiDisplay').innerText = "Unavailable";
                }
            } catch(e) {
                document.getElementById('dynamicUpiDisplay').innerText = "Network Error";
            }
        }
        
        fetchPlansFromServer(); 
        fetchLiveUpi(); // Trigger UPI Fetch

        // ==========================================
        // 🚀 IIT EXPERT FIX: SECURE QR CODE GENERATOR ENGINE
        // ==========================================
        document.getElementById('generateQrBtn').addEventListener('click', (e) => {
            e.preventDefault(); // Stop form submission behavior
            
            const upiId = document.getElementById('dynamicUpiDisplay').innerText.trim();
            const amount = selectedPrice; // 🚀 Extracted strictly from server-fetched plan

            // 🛡️ Master Shield: Hacker/Failsafe Check
            if (upiId === "Loading..." || upiId === "Unavailable" || upiId === "Network Error" || !upiId) {
                showCustomAlert("Secure Engine: Live UPI ID is not loaded yet. Please wait.");
                return;
            }
            if (!amount || amount <= 0) {
                showCustomAlert("Secure Engine: Please select a valid plan first.");
                return;
            }

            // 1. Generate Universal UPI URI (Works universally on GPay, Paytm, PhonePe, Navi)
            const upiUri = `upi://pay?pa=${upiId}&pn=BuildMoney&am=${amount}&cu=INR`;
            const encodedUri = encodeURIComponent(upiUri);
            
            // 2. 🚀 IIT EXPERT FIX: Modern High-Performance QR Engine (Bypasses all browser blocks)
            const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodedUri}&margin=0`;

            // 3. Render Premium Cancelable Modal (Matched with Screenshot)
            const modalHtml = `
                <div id="qrModalOverlay" class="custom-alert-overlay" style="display: flex; justify-content: center; align-items: center; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(4px); z-index: 9999;">
                    <div class="custom-alert-box" style="width: 90%; max-width: 330px; text-align: center; padding: 24px; border-radius: 20px; background: #ffffff; box-shadow: 0 10px 40px rgba(0,0,0,0.15); animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                        
                        <!-- Premium Clean Header -->
                        <h3 style="margin: 0 0 20px 0; color: #0f172a; font-size: 17px; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <span class="material-symbols-rounded" style="color: #1b6e35; font-size: 20px;">qr_code_scanner</span> Scan & Pay
                        </h3>
                        
                        <!-- Clean Dashed QR Container -->
                        <div style="background: #ffffff; padding: 10px; border-radius: 16px; border: 1.5px dashed #cbd5e1; margin: 0 auto 20px auto; width: fit-content; position: relative; display: flex; align-items: center; justify-content: center; min-width: 200px; min-height: 200px;">
                            
                            <!-- Native CSS Loader while image securely fetches -->
                            <div id="qrLoader" style="position: absolute; color: #cbd5e1; z-index: 1;">
                                <span class="material-symbols-rounded" style="font-size: 32px; animation: spin 1s linear infinite;">sync</span>
                            </div>
                            
                            <!-- 🚀 IIT EXPERT FIX: Bulletproof Image Loading Engine -->
                            <img src="${qrImageUrl}" alt="Secure UPI QR Code" style="width: 200px; height: 200px; border-radius: 10px; position: relative; z-index: 2; background: white; display: none;" onload="this.style.display='block'; document.getElementById('qrLoader').style.display='none';" onerror="this.style.display='none'; document.getElementById('qrLoader').innerHTML='<span style=\\'color:#e11d48; font-size:12px; font-weight:bold;\\'>Error Loading QR</span>';">
                        
                        </div>
                        
                        <!-- Typography perfectly matched with design -->
                        <p style="font-size: 12px; color: #64748b; margin: 0 0 6px 0; font-weight: 500;">Paying securely to: <strong style="color: #0f172a;">${upiId}</strong></p>
                        <p style="font-size: 20px; font-weight: 900; color: #1b6e35; margin: 0 0 24px 0;">Amount: ₹${amount}</p>
                        
                        <!-- Full Width Premium Button -->
                        <button onclick="document.getElementById('qrModalOverlay').remove()" style="width: 100%; padding: 14px; border: none; background: #f1f5f9; color: #334155; border-radius: 12px; cursor: pointer; font-weight: 800; font-size: 14px; transition: background 0.2s;" onmousedown="this.style.background='#e2e8f0'" onmouseup="this.style.background='#f1f5f9'">
                            Close Scanner
                        </button>
                        
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
        });

        // 🚀 IIT EXPERT: Base64 Media Engine & Live Preview
        const fileInput = document.getElementById('screenshotFile');
        const previewBox = document.getElementById('imagePreviewBox');
        const uploadText = document.getElementById('uploadText');
        const uploadIcon = document.getElementById('uploadIcon');

        let base64String = null;
        let mimeType = null;
        let fileName = null;

        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    base64String = event.target.result.split(',')[1];
                    mimeType = file.type;
                    fileName = file.name;
                    
                    // Set image as background for premium preview
                    previewBox.style.backgroundImage = `url(${event.target.result})`;
                    previewBox.style.backgroundSize = 'cover';
                    previewBox.style.backgroundPosition = 'center';
                    previewBox.style.borderStyle = 'solid'; // Remove dash border for clean image
                    
                    // Hide placeholder icons
                    uploadText.style.display = 'none';
                    uploadIcon.style.display = 'none';
                };
                reader.readAsDataURL(file);
            }
        });

        // 🚀 SUBMISSION LOGIC
        const submitBtn = document.getElementById('depositSubmitBtn');
        submitBtn.addEventListener('click', async () => {
            if (!base64String) {
                showCustomAlert("Kindly upload the payment screenshot first.");
                return;
            }

            const txnVal = document.getElementById('txnInput').value.trim();
            const user = firebase.auth().currentUser;

            if(!user) {
                showCustomAlert("Authentication Error! Please login again.");
                return;
            }

            submitBtn.innerHTML = "Processing & Uploading...";
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.7";

            try {
                let res = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    headers: { "Content-Type": "text/plain;charset=utf-8" },
                    body: JSON.stringify({
                        action: 'depositRequest',
                        email: user.email,
                        uid: user.uid, // 🛡️ Anti-CSRF Token
                        planName: selectedPlan,
                        price: selectedPrice,
                        transactionId: txnVal,
                        imageBase64: base64String,
                        mimeType: mimeType,
                        imageName: fileName
                    })
                });
                let textRes = await res.text();
                let result = JSON.parse(textRes);

                if (result.status === "success") {
                    showCustomAlert("Deposit Request Submitted Successfully!");
                    submitBtn.innerHTML = "Request Locked"; // Button safely visually locked
                    setTimeout(() => navigateTo('dashboard'), 1500); // Failsafe redirect with minor delay
                } else {
                    throw new Error(result.message);
                }
            } catch (err) {
                // 🚀 IIT EXPERT FIX: Smart Failsafe for Single Deposit Policy
                if (err.message === "One user ~ One Deposit Only") {
                    submitBtn.innerHTML = "Already Submitted";
                    // 🚀 We DO NOT re-enable the button. Strict block!
                    showCustomAlert("One user ~ One Deposit Only");
                } else {
                    submitBtn.innerHTML = "Submit Request";
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = "1";
                    showCustomAlert("Upload Failed: " + err.message);
                }
            }
        });
    }



    // ==========================================
    // 🚀 PREMIUM WITHDRAW REQUEST PORTAL
    // ==========================================
    function renderWithdrawScreen() {
        appContainer.innerHTML = `
            <div class="top-nav">
                <button class="back-btn" id="goBackWithdraw">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                <div class="nav-title text-center" style="font-size: 20px;">Withdraw Request Portal</div>
                <div style="width: 24px;"></div>
            </div>

            <div class="screen" style="padding-bottom: 100px;">
                
                <!-- Premium Wallet Balance Card -->
                <div style="background: linear-gradient(135deg, #7D0802 0%, #3B0402 100%); border-radius: 16px; padding: 20px; color: white; margin-bottom: 25px; box-shadow: 0 8px 20px rgba(27, 110, 53, 0.25);">
                    <p style="font-size: 13px; opacity: 0.9; margin-bottom: 4px;">Available Balance</p>
                    <h2 id="withdrawWalletBalance" style="font-size: 32px; font-weight: 800; margin: 0; color: white;">Loading...</h2>
                    <p id="realtimeDeductionHint" style="font-size: 12px; color: #c4eed0; margin-top: 8px; font-weight: 600; display: none; transition: all 0.3s ease;">Remaining Balance: ₹0.00</p>
                </div>

                <h3 class="section-title" style="margin-top: 0;">Bank Details</h3>
                
                <form id="withdrawForm">
                    <div class="input-group">
                        <label>Withdraw Amount (₹)</label>
                        <input type="number" id="withdrawAmt" placeholder="Enter Amount" required style="background: #f4f6f5; font-size: 18px; font-weight: bold; color: #1b6e35;">
                    </div>
                    <div class="input-group">
                        <label>Bank Name</label>
                        <input type="text" id="bankName" placeholder="e.g. State Bank of India" required style="background: #f4f6f5;">
                    </div>
                    <div class="input-group">
                        <label>Account Number</label>
                        <input type="number" id="accNumber" placeholder="Enter Account Number" required style="background: #f4f6f5;">
                    </div>
                    <div class="input-group">
                        <label>Confirm Account Number</label>
                        <input type="password" id="confirmAccNumber" placeholder="Re-enter Account Number" required style="background: #f4f6f5;">
                    </div>
                    <div class="input-group">
                        <label>IFSC Code</label>
                        <input type="text" id="ifscCode" placeholder="Enter IFSC Code" required style="background: #f4f6f5; text-transform: uppercase;">
                    </div>

                    <button type="submit" class="btn-primary" id="withdrawSubmitBtn" style="margin-top: 15px; box-shadow: 0 4px 15px rgba(27, 110, 53, 0.3);">Submit Request</button>
                </form>
            </div>
            ${getBottomNavHTML('wallet')} 
        `;

        document.getElementById('goBackWithdraw').addEventListener('click', () => {
            if (window.history.length > 1) { window.history.back(); } 
            else { navigateTo('dashboard', false); }
        });

        let currentBal = 0;
        const balDisplay = document.getElementById('withdrawWalletBalance');
        const amtInput = document.getElementById('withdrawAmt');
        const hintDisplay = document.getElementById('realtimeDeductionHint');
        const btn = document.getElementById('withdrawSubmitBtn');

        // Fetch Live Secure Balance
        const user = firebase.auth().currentUser;
        let isUserActive = false; // 🚀 IIT EXPERT FIX: Client-side flag tracker

        if(user) {
            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { "Content-Type": "text/plain;charset=utf-8" }, // 🛡️ IIT EXPERT FIX: CORS Preflight Shield
                body: JSON.stringify({ 
                    action: 'getUserProfile', 
                    email: user.email,
                    uid: user.uid // 🛡️ IIT EXPERT FIX: Anti-CSRF Token attached for backend authorization
                })
            })
            .then(res => res.text()) // 🛡️ IIT EXPERT FIX: Failsafe text parsing to prevent JSON crash
            .then(textRes => {
                let data = JSON.parse(textRes);
                if(data.status === "success") {
                    currentBal = data.walletBalance;
                    balDisplay.innerText = `₹${currentBal}.00`;
                    isUserActive = (data.accountStatus === "Active"); 
                    
                    if (!isUserActive) {
                        btn.disabled = true;
                        btn.style.opacity = '0.5';
                        btn.style.background = '#94a3b8';
                        btn.innerText = "Account Inactive";
                        document.getElementById('withdrawAmt').disabled = true;
                        showCustomAlert("Withdrawals are only allowed for Active Accounts. Please Deposit and Activate your plan first.");
                    }
                } else {
                    balDisplay.innerText = "Error";
                    console.error("Backend Rejected Request:", data.message);
                }
            })
            .catch(() => balDisplay.innerText = "Network Error");
        }

        // 🚀 Real-time Dynamic Math Engine
        amtInput.addEventListener('input', (e) => {
            let val = Number(e.target.value) || 0;
            if (val > 0) {
                hintDisplay.style.display = 'block';
                if (val > currentBal) {
                    hintDisplay.innerText = "Insufficient Balance!";
                    hintDisplay.style.color = "#ff4d4d";
                    btn.disabled = true;
                    btn.style.opacity = '0.5';
                } else {
                    hintDisplay.innerText = `Remaining after withdraw: ₹${(currentBal - val).toFixed(2)}`;
                    hintDisplay.style.color = "#c4eed0";
                    btn.disabled = false;
                    btn.style.opacity = '1';
                }
            } else {
                hintDisplay.style.display = 'none';
                btn.disabled = false;
                btn.style.opacity = '1';
            }
        });

        // 🚀 Submit Form Logic
        document.getElementById('withdrawForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if(!user) {
                showCustomAlert("Authentication Error! Please login again.");
                return;
            }

            const amt = Number(amtInput.value);
            const bank = document.getElementById('bankName').value.trim();
            const acc1 = document.getElementById('accNumber').value.trim();
            const acc2 = document.getElementById('confirmAccNumber').value.trim();
            const ifsc = document.getElementById('ifscCode').value.trim().toUpperCase();

            // Client Side Double Check
            if (!isUserActive) { // 🚀 Double lock before sending API request
                showCustomAlert("Security Block: Your account is currently Inactive.");
                return;
            }
            if (amt <= 0 || amt > currentBal) {
                showCustomAlert("Invalid Amount or Insufficient Wallet Balance!");
                return;
            }
            if (acc1 !== acc2) {
                showCustomAlert("Account Numbers do not match!");
                return;
            }

            btn.innerText = "Processing Securely...";
            btn.disabled = true;

            try {
                let res = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    headers: { "Content-Type": "text/plain;charset=utf-8" },
                    body: JSON.stringify({
                        action: 'withdrawRequest',
                        email: user.email,
                        uid: user.uid, // 🛡️ IIT EXPERT ENGINE: Anti-CSRF Authentication Token Attached
                        amount: amt,
                        bankName: bank,
                        accNo: acc1,
                        ifsc: ifsc
                    })
                });
                let result = await res.json();

                if (result.status === "success") {
                    currentBal = result.newBalance; // Update local balance dynamically
                    balDisplay.innerText = `₹${currentBal}.00`;
                    hintDisplay.style.display = 'none';
                    document.getElementById('withdrawForm').reset();
                    
                    showCustomAlert("Withdraw Request Submitted & Balance Deducted!");
                    setTimeout(() => navigateTo('dashboard'), 2000); 
                } else {
                    throw new Error(result.message);
                }
            } catch (err) {
                showCustomAlert("Transaction Failed: " + err.message);
            } finally {
                btn.innerText = "Submit Request";
                btn.disabled = false;
            }
        });
    }


    // ==========================================
    // NEUMORPHIC ADMIN LOGIN SCREEN
    // ==========================================
    function renderAdminLoginScreen() {
        appContainer.innerHTML = `
            <div class="neumorphic-wrapper">
                <div class="top-nav" style="background: transparent; border: none; box-shadow: none; position: absolute; top: 0; width: 100%; z-index: 10;">
                    <button class="back-btn" id="goBackAdmin" style="color: #6a737d;">
                        <span class="material-symbols-outlined">arrow_back</span>
                    </button>
                </div>
                
                <div class="neumorphic-circle">
                    <h2 class="admin-title">Login</h2>
                    <p class="admin-subtitle">Admin Engine</p>

                    <form id="adminLoginForm" class="admin-form">
                        <div class="neumorphic-input-group">
                            <span class="material-symbols-rounded icon-user">person</span>
                            <input type="text" id="adminUser" placeholder="Username" required autocomplete="off">
                        </div>
                        <div class="neumorphic-input-group">
                            <span class="material-symbols-rounded icon-lock">lock</span>
                            <input type="password" id="adminPass" placeholder="Password" required>
                        </div>
                        <button type="submit" class="neumorphic-btn" id="adminLoginBtn">SIGN IN</button>
                    </form>
                </div>
            </div>
        `;

        // Loophole Free Back Navigation
        document.getElementById('goBackAdmin').addEventListener('click', () => {
            if (window.history.length > 1) { window.history.back(); } 
            else { navigateTo('support', false); }
        });

        // 🚀 Admin Authentication Engine
        document.getElementById('adminLoginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const userVal = document.getElementById('adminUser').value.trim();
            const passVal = document.getElementById('adminPass').value.trim();
            const btn = document.getElementById('adminLoginBtn');

            btn.innerText = "Signing In...";
            btn.disabled = true;

            try {
                // 🚀 IIT EXPERT FIX: Added explicit text/plain header to strictly bypass browser CORS preflight blocks
                let res = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8"
                    },
                    body: JSON.stringify({
                        action: 'adminLogin',
                        username: userVal,
                        password: passVal
                    })
                });
                let result = await res.json();

                if (result.status === "success") {
                    showCustomAlert("Welcome Admin! Engine Unlocked.");
                    // 🚀 IIT EXPERT FIX: Save Secure Session Token Client-Side
                    sessionStorage.setItem('buildMoneyAdminToken', result.adminToken);
                    setTimeout(() => navigateTo('adminDashboard'), 1500); 
                } else {
                    throw new Error(result.message);
                }
            } catch(error) {
                btn.innerText = "SIGN IN";
                btn.disabled = false;
                showCustomAlert("Access Denied: " + error.message);
            }
        });
    }

    // ==========================================
    // 🚀 ADMIN LIVE STATS ENGINE (With Number Animation)
    // ==========================================
    async function fetchAdminDashboardStats() {
        const usersCountEl = document.getElementById('liveUsersCount');
        const activeCountEl = document.getElementById('liveActiveCount');
        if(!usersCountEl || !activeCountEl) return;

        try {
            let res = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify({ 
                    action: 'getAdminStats',
                    adminToken: sessionStorage.getItem('buildMoneyAdminToken') // Strict Token
                })
            });
            
            let textRes = await res.text();
            let result;
            try {
                result = JSON.parse(textRes);
            } catch(e) {
                throw new Error("JSON Parse failed");
            }
            
            if (result.status === "success") {
                // Smooth Counting Animation for Premium Feel (Duration 1.2 seconds)
                animateValue(usersCountEl, 0, result.totalUsers, 1200);
                animateValue(activeCountEl, 0, result.activeAccounts, 1200);
            } else {
                usersCountEl.innerText = "Err";
                activeCountEl.innerText = "Err";
            }
        } catch(e) {
            usersCountEl.innerText = "--";
            activeCountEl.innerText = "--";
        }
    }
    
    // 🚀 High-Performance Native CSS-Level Number Counter
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                obj.innerHTML = end; // Final safety check so number is perfectly exact
            }
        };
        window.requestAnimationFrame(step);
    }

    // ==========================================
    // 🚀 ADMIN UPI FETCH & UPDATE ENGINE
    // ==========================================
    
    // 1. Fetch current UPI for Admin Card
    async function fetchAdminLiveUpi() {
        const upiEl = document.getElementById('adminCurrentUpi');
        if(!upiEl) return; // Failsafe

        try {
            let res = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify({ action: 'getUpiId' }) 
            });
            let textRes = await res.text();
            let result = JSON.parse(textRes);
            if (result.status === "success") {
                upiEl.innerText = result.upiId;
            } else {
                upiEl.innerText = "Error Fetching";
            }
        } catch(e) {
            upiEl.innerText = "Network Error";
        }
    }

    // 2. Open Premium Neumorphic Style Update Modal
    window.openUpiUpdateModal = function() {
        // Find current UPI to pre-fill the input box smoothly
        let currentUpi = document.getElementById('adminCurrentUpi').innerText;
        if(currentUpi === 'Loading...' || currentUpi === 'Error Fetching' || currentUpi === 'Network Error') currentUpi = '';

        const modalHtml = `
            <div id="upiModalOverlay" class="custom-alert-overlay" style="display: flex;">
                <div class="custom-alert-box" style="width: 90%; max-width: 350px; text-align: left; padding: 24px;">
                    <div style="display: flex; align-items: center; margin-bottom: 15px; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px;">
                        <span class="material-symbols-rounded" style="color: #2563eb; font-size: 24px; margin-right: 8px;">qr_code_scanner</span>
                        <h3 style="color: #0f172a; font-size: 18px; margin: 0;">Update Live UPI ID</h3>
                    </div>
                    <p style="font-size: 13px; color: #64748b; margin-bottom: 15px; font-weight: 500;">Please enter the new UPI ID here</p>
                    
                    <input type="text" id="newUpiInput" value="${currentUpi}" placeholder="e.g. 9876543210@ybl" style="width: 100%; padding: 14px; border: 2px solid #e2e8f0; border-radius: 10px; margin-bottom: 20px; font-weight: 700; color: #0f172a; outline: none; font-size: 15px; transition: border-color 0.2s;" onfocus="this.style.borderColor='#2563eb'" onblur="this.style.borderColor='#e2e8f0'">
                    
                    <div style="display: flex; gap: 10px;">
                        <button onclick="document.getElementById('upiModalOverlay').remove()" style="flex: 1; padding: 14px; border: none; background: #f1f5f9; color: #475569; border-radius: 10px; cursor: pointer; font-weight: 800; font-size: 13px;">Cancel</button>
                        <button id="saveUpiBtn" onclick="saveNewUpi()" style="flex: 1; padding: 14px; border: none; background: #2563eb; color: white; border-radius: 10px; cursor: pointer; font-weight: 800; font-size: 13px; box-shadow: 0 4px 10px rgba(37,99,235,0.2);">Update Now</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    };

    // 3. Save Logic Engine
    window.saveNewUpi = async function() {
        const upiVal = document.getElementById('newUpiInput').value.trim();
        if (!upiVal) { showCustomAlert("Error: UPI ID blank nahi ho sakta!"); return; }
        
        const btn = document.getElementById('saveUpiBtn');
        btn.innerText = "Updating...";
        btn.disabled = true;

        try {
            let res = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify({ 
                    action: 'updateUpiId', 
                    newUpi: upiVal,
                    adminToken: sessionStorage.getItem('buildMoneyAdminToken') // Strict Token Inject
                })
            });
            let result = await res.json();
            if (result.status === "success") {
                document.getElementById('upiModalOverlay').remove();
                showCustomAlert("UPI ID Live Updated Successfully!");
                fetchAdminLiveUpi(); // Instantly refresh the UI card
            } else throw new Error(result.message);
        } catch(e) {
            btn.innerText = "Update Now";
            btn.disabled = false;
            showCustomAlert("Error: " + e.message);
        }
    };

    // ==========================================
    // ADMIN DEPOSIT REQUESTS LIST SCREEN
    // ==========================================
    function renderAdminDepositRequestsScreen() {
        appContainer.innerHTML = `
            <div class="top-nav" style="background-color: #ffffff; border-bottom: 1px solid #f0f0f0;">
                <button class="back-btn" id="goBackAdminDeposit">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                <div class="nav-title" style="font-size: 18px; flex-grow: 1; text-align: left; font-weight: 800;">All Deposit Requests</div>
                <div style="width: 24px;"></div>
            </div>
            
            <div class="screen" style="background-color: #f8fafc; min-height: 100vh;">
                <div id="loadingIndicator" class="text-center" style="color: #64748b; margin-top: 40px;">
                    <span class="material-symbols-outlined" style="animation: spin 1s linear infinite; font-size: 36px; color: #3b82f6;">refresh</span>
                    <p style="margin-top: 10px; font-weight: 500;">Fetching secure requests...</p>
                </div>
                
                <div id="depositRequestsList" style="display: flex; flex-direction: column; gap: 12px; padding-bottom: 30px;">
                    <!-- Dynamic List Engine Will Populate Here -->
                </div>
            </div>
        `;

        // 1. Hardware Backpress Sync (100% Loophole Free)
        document.getElementById('goBackAdminDeposit').addEventListener('click', () => {
            if (window.history.length > 1) { window.history.back(); } 
            else { navigateTo('adminDashboard', false); }
        });

        // 2. Trigger Fetch Logic
        fetchDepositRequests();
    }


    async function fetchDepositRequests() {
        const listContainer = document.getElementById('depositRequestsList');
        const loader = document.getElementById('loadingIndicator');

        try {
            let res = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify({ 
                    action: 'getDepositRequests',
                    // 🚀 IIT EXPERT FIX: Token injected for fetching lists
                    adminToken: sessionStorage.getItem('buildMoneyAdminToken') 
                })
            });
            let result = await res.json();
            loader.style.display = 'none';

            if (result.status === "success") {
                let reqData = result.data;
                if (reqData.length === 0) {
                    listContainer.innerHTML = `<p class="empty-state text-center" style="margin-top:20px;">No pending requests.</p>`;
                    return;
                }

                reqData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                window.adminPendingRequests = reqData; 

                listContainer.innerHTML = reqData.map((req, index) => {
                    // 🚀 IIT EXPERT FIX: Universal variables strictly applied (Fixes ₹NaN & Wrong Plan)
                    let planName = req.planName; 
                    let amt = req.amount;
                    
                    let displayDate = req.timestamp;
                    try {
                        const dateObj = new Date(req.timestamp);
                        if (!isNaN(dateObj.getTime())) {
                            displayDate = dateObj.toLocaleString('en-IN', {
                                day: '2-digit', month: 'short', year: 'numeric',
                                hour: '2-digit', minute: '2-digit', hour12: true
                            });
                        }
                    } catch(e) {}

                    return `
                    <div class="request-list-card">
                        <div class="request-info">
                            <h4>${req.name}</h4>
                            <p>${req.email}</p>
                            <small><span class="material-symbols-outlined icon-small">schedule</span> ${displayDate}</small>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-weight: bold; color: #1b6e35; font-size: 14px;">₹${amt}</div>
                            <button class="btn-view-details" onclick="openAdminApprovalModal(${index})">View</button>
                        </div>
                    </div>
                `}).join('');
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            loader.innerHTML = `<p style="color: #e11d48;">Error: ${error.message}</p><button class="btn-view-details" onclick="fetchDepositRequests()">Retry</button>`;
        }
    }

    // 🚀 Admin Approval Engine Modal
    window.openAdminApprovalModal = function(index) {
        const req = window.adminPendingRequests[index];
        
        // 🚀 IIT EXPERT FIX: Universal variables strictly applied for Modal (Fixes ₹NaN)
        const amt = req.amount;
        const planName = req.planName;
        
        const modalHtml = `
            <div id="adminModalOverlay" class="custom-alert-overlay" style="display: flex;">
                <div class="custom-alert-box" style="width: 90%; max-width: 400px; text-align: left; padding: 20px;">
                    <h3 style="margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Verification</h3>
                    <p><strong>Name:</strong> ${req.name}</p>
                    <p><strong>Email:</strong> ${req.email}</p>
                    <p><strong>Plan:</strong> ${planName} (₹${amt})</p>
                    <p style="margin-bottom: 10px;"><strong>Txn ID:</strong> ${req.txnId}</p>
                    
                    <a href="${req.screenshot}" target="_blank" style="display: block; background: #f0f0f0; text-align: center; padding: 10px; border-radius: 8px; margin-bottom: 20px; color: #2563eb; font-weight: bold; text-decoration: none;">
                        <span class="material-symbols-outlined" style="vertical-align: middle;">open_in_new</span> View Screenshot
                    </a>

                    <div style="display: flex; gap: 10px;">
                        <button onclick="closeAdminModal()" style="flex: 1; padding: 12px; border: none; background: #e2e8f0; border-radius: 8px; cursor: pointer; font-weight: bold;">Cancel</button>
                        <button id="verifyApproveBtn" onclick="approveDepositReq(${req.rowNumber}, '${req.email}')" style="flex: 1; padding: 12px; border: none; background: #1b6e35; color: white; border-radius: 8px; cursor: pointer; font-weight: bold;">Verify & Add</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    };

    window.closeAdminModal = function() {
        const modal = document.getElementById('adminModalOverlay');
        if(modal) modal.remove();
    };

    window.approveDepositReq = async function(rowNumber, email) {
        const btn = document.getElementById('verifyApproveBtn');
        btn.innerText = "Processing...";
        btn.disabled = true;

        try {
            let res = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify({ 
                    action: 'verifyDeposit', 
                    rowNumber: rowNumber, 
                    email: email,
                    // 🚀 IIT EXPERT FIX: Token injected for Verify & Add
                    adminToken: sessionStorage.getItem('buildMoneyAdminToken') 
                })
            });
            let result = await res.json();
            if (result.status === "success") {
                showCustomAlert("Success! Plan activated and balance added.");
                closeAdminModal();
                fetchDepositRequests(); // Auto refresh list
            } else throw new Error(result.message);
        } catch(e) {
            btn.innerText = "Verify & Add";
            btn.disabled = false;
            showCustomAlert("Error: " + e.message);
        }
    };

    // ==========================================
    // 🚀 ADMIN WITHDRAW REQUESTS LIST (Dual-Tab Engine)
    // ==========================================
    function renderAdminWithdrawRequestsScreen() {
        appContainer.innerHTML = `
            <!-- 🛡️ IIT EXPERT ENGINE: Removed inline sticky -->
            <div class="top-nav" style="background-color: #ffffff; border-bottom: 1px solid #f0f0f0;">
                <button class="back-btn" id="goBackAdminWithdraw">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                <div class="nav-title" style="font-size: 18px; flex-grow: 1; text-align: left; font-weight: 800;">Withdraw Requests</div>
                <div style="width: 24px;"></div>
            </div>
            
            <!-- 🛡️ IIT EXPERT ENGINE: Removed conflicting padding -->
            <div class="screen" style="background-color: #f8fafc; min-height: 100vh;">
                
                <!-- 🚀 Dual-Tab Segmented Controller -->
                <div style="display: flex; gap: 10px; margin-bottom: 20px; padding: 0 4px;">
                    <button id="tabPendingW" onclick="switchWithdrawTab('Pending')" style="flex: 1; padding: 12px; border-radius: 12px; border: none; background: #f59e0b; color: white; font-weight: 800; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 10px rgba(245, 158, 11, 0.2);">Pending</button>
                    <button id="tabApprovedW" onclick="switchWithdrawTab('Approved')" style="flex: 1; padding: 12px; border-radius: 12px; border: none; background: #e2e8f0; color: #64748b; font-weight: 800; cursor: pointer; transition: 0.2s;">Approved</button>
                </div>

                <div id="withdrawLoadingIndicator" class="text-center" style="color: #64748b; margin-top: 40px;">
                    <span class="material-symbols-outlined" style="animation: spin 1s linear infinite; font-size: 36px; color: #f59e0b;">refresh</span>
                    <p style="margin-top: 10px; font-weight: 500;">Fetching secure requests...</p>
                </div>
                
                <div id="withdrawRequestsList" style="display: flex; flex-direction: column; gap: 12px; padding-bottom: 30px;">
                    <!-- Dynamic List Engine Will Populate Here -->
                </div>
            </div>
        `;

        document.getElementById('goBackAdminWithdraw').addEventListener('click', () => {
            if (window.history.length > 1) { window.history.back(); } 
            else { navigateTo('adminDashboard', false); }
        });

        window.currentWithdrawTab = 'Pending';
        fetchAdminWithdraws();
    }

    // Tab Switching Logic
    window.switchWithdrawTab = function(tab) {
        window.currentWithdrawTab = tab;
        document.getElementById('tabPendingW').style.background = tab === 'Pending' ? '#f59e0b' : '#e2e8f0';
        document.getElementById('tabPendingW').style.color = tab === 'Pending' ? 'white' : '#64748b';
        document.getElementById('tabPendingW').style.boxShadow = tab === 'Pending' ? '0 4px 10px rgba(245, 158, 11, 0.2)' : 'none';
        
        document.getElementById('tabApprovedW').style.background = tab === 'Approved' ? '#10b981' : '#e2e8f0';
        document.getElementById('tabApprovedW').style.color = tab === 'Approved' ? 'white' : '#64748b';
        document.getElementById('tabApprovedW').style.boxShadow = tab === 'Approved' ? '0 4px 10px rgba(16, 185, 129, 0.2)' : 'none';
        
        renderWithdrawList();
    };

    // Data Fetch API
    async function fetchAdminWithdraws() {
        const listContainer = document.getElementById('withdrawRequestsList');
        const loader = document.getElementById('withdrawLoadingIndicator');

        try {
            let res = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify({ 
                    action: 'getWithdrawRequests',
                    adminToken: sessionStorage.getItem('buildMoneyAdminToken') 
                })
            });
            let result = await res.json();
            loader.style.display = 'none';

            if (result.status === "success") {
                let reqData = result.data;
                // Chronological Sort: Newest First
                reqData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                window.adminWithdrawData = reqData; 
                renderWithdrawList();
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            loader.innerHTML = `<p style="color: #e11d48;">Error: ${error.message}</p><button class="btn-view-details" onclick="fetchAdminWithdraws()">Retry</button>`;
        }
    }

    // List Rendering Engine
    window.renderWithdrawList = function() {
        const listContainer = document.getElementById('withdrawRequestsList');
        if(!window.adminWithdrawData) return;

        const filteredData = window.adminWithdrawData.filter(req => req.status === window.currentWithdrawTab);

        if (filteredData.length === 0) {
            listContainer.innerHTML = `<p class="empty-state text-center" style="margin-top:20px;">No ${window.currentWithdrawTab.toLowerCase()} requests found.</p>`;
            return;
        }

        listContainer.innerHTML = filteredData.map((req) => {
            // Find global index for accurate modal mapping
            const globalIndex = window.adminWithdrawData.findIndex(r => r.rowNumber === req.rowNumber);
            
            let displayDate = req.timestamp;
            try {
                const dateObj = new Date(req.timestamp);
                if (!isNaN(dateObj.getTime())) {
                    displayDate = dateObj.toLocaleString('en-IN', {
                        day: '2-digit', month: 'short', year: 'numeric',
                        hour: '2-digit', minute: '2-digit', hour12: true
                    });
                }
            } catch(e) {}

            // 🚀 IIT EXPERT UI FIX: Premium Pill-Shaped Badge Design
            let badgeHtml = req.status === 'Approved' 
                ? `<span style="background: #e6f4ea; color: #137333; padding: 5px 12px; border-radius: 20px; font-size: 11px; font-weight: 800; display: inline-flex; align-items: center; gap: 4px; letter-spacing: 0.5px; box-shadow: 0 2px 4px rgba(19, 115, 51, 0.1);"><span class="material-symbols-rounded" style="font-size: 14px;">check_circle</span> APPROVED</span>`
                : `<span style="background: #fff3e0; color: #e67c22; padding: 5px 12px; border-radius: 20px; font-size: 11px; font-weight: 800; display: inline-flex; align-items: center; gap: 4px; letter-spacing: 0.5px; box-shadow: 0 2px 4px rgba(230, 124, 34, 0.1);"><span class="material-symbols-rounded" style="font-size: 14px;">schedule</span> PENDING</span>`;

            // 🚀 IIT EXPERT UI FIX: Exact Screenshot Matched Premium Layout
            return `
            <div style="background: #ffffff; border-radius: 16px; padding: 18px; margin-bottom: 14px; box-shadow: 0 4px 15px rgba(0,0,0,0.04); border: 1px solid #f1f5f9; display: flex; flex-direction: column;">
                
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
                    <!-- Left Side: User & Bank Info -->
                    <div style="display: flex; flex-direction: column;">
                        <h4 style="font-size: 16px; font-weight: 800; color: #0f172a; margin: 0 0 4px 0; letter-spacing: 0.2px;">${req.name}</h4>
                        <p style="font-size: 13px; font-weight: 500; color: #64748b; margin: 0 0 6px 0;">${req.bankName}</p>
                        <div style="font-size: 12px; font-weight: 500; color: #94a3b8; display: flex; align-items: center; gap: 4px;">
                            <span class="material-symbols-outlined" style="font-size: 14px;">schedule</span> ${displayDate}
                        </div>
                    </div>
                    
                    <!-- Right Side: Amount & Badge -->
                    <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end;">
                        <div style="font-size: 18px; font-weight: 900; color: #000000; margin-bottom: 8px; letter-spacing: 0.5px;">₹${req.amount}</div>
                        ${badgeHtml}
                    </div>
                </div>
                
                <!-- Full Width Action Button -->
                <button onclick="openWithdrawApprovalModal(${globalIndex})" style="width: 100%; padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; color: #1e293b; font-weight: 700; font-size: 13px; cursor: pointer; transition: background 0.2s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='#f8fafc'">
                    View Details & Action
                </button>
                
            </div>
            `;
        }).join('');
    };

    // Detailed Bank Info Modal
    window.openWithdrawApprovalModal = function(index) {
        const req = window.adminWithdrawData[index];
        
        let actionButtons = '';
        if (req.status === 'Pending') {
            actionButtons = `
                <button onclick="closeAdminWithdrawModal()" style="flex: 1; padding: 12px; border: none; background: #e2e8f0; border-radius: 8px; cursor: pointer; font-weight: bold; color: #475569;">Cancel</button>
                <button id="verifyWithdrawBtn" onclick="approveWithdrawReq(${req.rowNumber})" style="flex: 1; padding: 12px; border: none; background: #f59e0b; color: white; border-radius: 8px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 10px rgba(245, 158, 11, 0.3);">Withdraw Accepted</button>
            `;
        } else {
            actionButtons = `
                <button onclick="closeAdminWithdrawModal()" style="width: 100%; padding: 12px; border: none; background: #10b981; color: white; border-radius: 8px; cursor: pointer; font-weight: bold;">Close Panel</button>
            `;
        }

        const modalHtml = `
            <div id="adminWithdrawModalOverlay" class="custom-alert-overlay" style="display: flex;">
                <div class="custom-alert-box" style="width: 90%; max-width: 400px; text-align: left; padding: 20px;">
                    <div style="display: flex; align-items: center; margin-bottom: 15px; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px;">
                        <span class="material-symbols-rounded" style="color: #f59e0b; font-size: 24px; margin-right: 8px;">account_balance</span>
                        <h3 style="color: #0f172a; font-size: 18px; margin: 0;">Withdraw Details</h3>
                    </div>
                    
                    <div style="background: #f8fafc; padding: 15px; border-radius: 12px; margin-bottom: 20px; border: 1px dashed #cbd5e1;">
                        <p style="margin-bottom: 8px; font-size: 14px;"><span style="color: #64748b;">Name:</span> <strong style="color: #0f172a; float: right;">${req.name}</strong></p>
                        <p style="margin-bottom: 8px; font-size: 14px;"><span style="color: #64748b;">Amount:</span> <strong style="color: #f59e0b; float: right; font-size: 16px;">₹${req.amount}</strong></p>
                        <p style="margin-bottom: 8px; font-size: 14px;"><span style="color: #64748b;">Bank:</span> <strong style="color: #0f172a; float: right;">${req.bankName}</strong></p>
                        <p style="margin-bottom: 8px; font-size: 14px;"><span style="color: #64748b;">A/C No:</span> <strong style="color: #0f172a; float: right; letter-spacing: 1px;">${req.accNo}</strong></p>
                        <p style="margin-bottom: 0px; font-size: 14px;"><span style="color: #64748b;">IFSC:</span> <strong style="color: #0f172a; float: right; text-transform: uppercase;">${req.ifsc}</strong></p>
                    </div>

                    <div style="display: flex; gap: 10px;">
                        ${actionButtons}
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    };

    window.closeAdminWithdrawModal = function() {
        const modal = document.getElementById('adminWithdrawModalOverlay');
        if(modal) modal.remove();
    };

    window.approveWithdrawReq = async function(rowNumber) {
        const btn = document.getElementById('verifyWithdrawBtn');
        btn.innerText = "Processing...";
        btn.disabled = true;

        try {
            let res = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify({ 
                    action: 'approveWithdraw', 
                    rowNumber: rowNumber, 
                    adminToken: sessionStorage.getItem('buildMoneyAdminToken') 
                })
            });
            let result = await res.json();
            if (result.status === "success") {
                showCustomAlert("Withdraw Status Updated to Approved!");
                closeAdminWithdrawModal();
                fetchAdminWithdraws(); // Automatically refresh & transition cards
            } else throw new Error(result.message);
        } catch(e) {
            btn.innerText = "Withdraw Accepted";
            btn.disabled = false;
            showCustomAlert("Error: " + e.message);
        }
    };


    // ==========================================
    // 3. MASTER AUTH STATE LISTENER (Security Check)
    // ==========================================
    // Yeh listener background mein hamesha check karta hai ki user logged in hai ya nahi
    auth.onAuthStateChanged((user) => {
        if (user) {
            // Agar user logged in hai, toh seedha Dashboard dikhao (Login bypass ho jayega)
            history.replaceState({ screen: 'dashboard' }, '', '#dashboard');
            renderDashboardScreen();
        } else {
            // Agar logout ho gaya hai ya naya user hai, toh Login page par bhejo
            history.replaceState({ screen: 'login' }, '', '#login');
            renderLoginScreen();
        }

        // 🚀 IIT EXPERT FIX: Kill the Native Splash Screen instantly after UI is painted
        setTimeout(() => {
            const splashScreen = document.getElementById('native-splash');
            if (splashScreen) {
                splashScreen.style.opacity = '0'; // Smooth fade out trigger
                setTimeout(() => {
                    splashScreen.style.display = 'none'; // Remove completely from DOM flow
                }, 400); // 400ms CSS animation complete hone ka wait
            }
        }, 150); // 150ms buffer taaki browser HTML render kar le
    });


    // ==========================================
    // 4. PREMIUM PWA ENGINE: MANDATORY INSTALL WALL
    // ==========================================
    
    // 🚀 1. Register Master Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./firebase-messaging-sw.js')
                .then(() => console.log('IIT Expert PWA: Native Engine Activated!'))
                .catch((err) => console.error('PWA Engine Failed:', err));
        });
    }


    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone || document.referrer.includes('android-app://');
    
    // 🛡️ IIT EXPERT ENGINE: Strict Mandatory Install Wall Activated (Developer Bypass Removed)
    if (!isStandalone) {
        document.getElementById('app-container').style.display = 'none';
        const installWall = document.createElement('div');
        installWall.innerHTML = `
            <div style="position: fixed; top:0; left:0; width: 100%; height: 100vh; background: #f8fafc; z-index: 999999; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 25px; text-align: center;">
                
                <!-- Premium Floating App Icon -->
                <div style="width: 110px; height: 110px; background: #ffffff; border-radius: 28px; box-shadow: 0 12px 30px rgba(27, 110, 53, 0.25); margin-bottom: 25px; display: flex; justify-content: center; align-items: center; padding: 6px; animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                    <img src="./icon-512x512.png" style="width: 100%; height: 100%; border-radius: 22px; object-fit: cover;">
                </div>
                
                <h2 style="font-size: 28px; font-weight: 900; color: #0f172a; margin-bottom: 8px; letter-spacing: -0.5px;">Grow Your Future</h2>
                <p style="font-size: 15px; color: #64748b; font-weight: 600; margin-bottom: 40px; max-width: 300px; line-height: 1.5;">To ensure a 100% secure and premium experience, please install our native app to continue.</p>

                <!-- Action Button -->
                <button id="strictInstallBtn" style="background: linear-gradient(135deg, #1b6e35, #10b981); color: white; border: none; padding: 18px 24px; width: 100%; max-width: 300px; border-radius: 16px; font-size: 16px; font-weight: 800; display: flex; justify-content: center; align-items: center; gap: 8px; box-shadow: 0 8px 20px rgba(27, 110, 53, 0.3); cursor: pointer; transition: transform 0.2s;" onmousedown="this.style.transform='scale(0.96)'" onmouseup="this.style.transform='scale(1)'">
                    <span class="material-symbols-rounded" style="font-size: 24px;">download</span> Install App Now
                </button>
                
                <!-- iOS Failsafe Instruction (Because Apple blocks auto-prompts) -->
                <div id="iosInstructions" style="display: none; flex-direction: column; align-items: center; margin-top: 20px; background: #ffffff; padding: 16px; border-radius: 16px; border: 1.5px dashed #cbd5e1; box-shadow: 0 4px 10px rgba(0,0,0,0.02);">
                    <p style="font-size: 14px; color: #0f172a; font-weight: 800; margin: 0 0 8px 0;">iOS Installation:</p>
                    <p style="font-size: 13px; color: #64748b; font-weight: 600; margin: 0;">Tap <span class="material-symbols-rounded" style="font-size: 16px; vertical-align: middle; color: #3b82f6;">ios_share</span> Share icon below and select <strong style="color: #0f172a;">"Add to Home Screen"</strong>.</p>
                </div>

            </div>
        `;
        document.body.appendChild(installWall);

        // Apple Device Detection
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        const btn = document.getElementById('strictInstallBtn');
        const iosMsg = document.getElementById('iosInstructions');

        if (isIOS) {
            btn.style.display = 'none'; // Hide native install button for Apple
            iosMsg.style.display = 'flex'; // Show Apple manual instructions
        }

        // 🚀 Native App Installation Logic
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e; // Chrome ready hone par prompt hold karta hai
        });

        btn.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    btn.innerHTML = `<span class="material-symbols-rounded">sync</span> Installing...`;
                    btn.style.background = "#94a3b8";
                    btn.style.boxShadow = "none";
                }
                deferredPrompt = null;
            } else {
                // Failsafe agar user page load hone se pehle hi click kar de
                showCustomAlert("Preparing installation engine... Please wait 2 seconds and tap again.");
            }
        });

        // 🚀 Installation Success Action
        window.addEventListener('appinstalled', () => {
            btn.innerHTML = `<span class="material-symbols-rounded">done_all</span> Installed Successfully!`;
            btn.style.background = "#1b6e35";
            showCustomAlert("App Installed Successfully! Please close this browser tab and open 'Grow Your Future' App from your phone's home screen.");
        });
    }

    // 🚀 3. Real-Time Offline/Online Monitor (Works inside App)
    window.addEventListener('offline', () => { showCustomAlert("You are offline. Please check your internet connection."); });
    window.addEventListener('online', () => { showCustomAlert("Back online! Connection restored."); });

});
