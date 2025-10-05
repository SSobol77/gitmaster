// GitMaster - Interactive Git Tutorial
// Main JavaScript file

// Global variables
let terminalHistory = [];
let commandsCount = 0;
let correctCommands = 0;
let errorCount = 0;
let currentQuizQuestion = 0;
let quizScore = 0;
let quizAnswered = false;

// Quiz questions data
const quizQuestions = [
    {
        question: "Jaką komendę używasz do sprawdzenia statusu repozytorium Git?",
        options: ["git status", "git check", "git state", "git info"],
        correct: 0,
        explanation: "git status pokazuje aktualny stan repozytorium - zmodyfikowane, staged i nieśledzone pliki."
    },
    {
        question: "Która komenda służy do dodania wszystkich zmian do staging area?",
        options: ["git add all", "git add .", "git stage", "git prepare"],
        correct: 1,
        explanation: "git add . dodaje wszystkie zmienione pliki z aktualnego katalogu do staging area."
    },
    {
        question: "Jak poprawnie zatwierdzić zmiany z komunikatem?",
        options: ["git commit 'message'", "git commit -m 'message'", "git save 'message'", "git push 'message'"],
        correct: 1,
        explanation: "git commit -m 'message' zatwierdza zmiany z podanym komunikatem."
    },
    {
        question: "Która komenda pobiera zmiany z zdalnego repozytorium?",
        options: ["git download", "git get", "git pull", "git fetch"],
        correct: 2,
        explanation: "git pull pobiera i scala zmiany z zdalnego repozytorium z aktualnym branch-em."
    },
    {
        question: "Jak poprawnie wysłać zmiany do zdalnego repozytorium?",
        options: ["git push main origin", "git send origin main", "git push origin main", "git upload origin main"],
        correct: 2,
        explanation: "git push origin main - poprawna składnia to: git push [remote] [branch]"
    }
];

// Git commands simulation
const gitCommands = {
    'git status': {
        output: `On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   index.html
        modified:   main.js

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   style.css

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        tutorial.html
        generator.html`,
        correct: true,
        help: "Sprawdź status repozytorium"
    },
    'git add .': {
        output: `Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   index.html
        modified:   main.js
        modified:   style.css
        new file:   tutorial.html
        new file:   generator.html`,
        correct: true,
        help: "Dodaj wszystkie zmiany do stage"
    },
    'git commit -m "test commit"': {
        output: `[main 7a8b9c2] test commit
 5 files changed, 234 insertions(+), 45 deletions(-)
 create mode 100644 tutorial.html
 create mode 100644 generator.html`,
        correct: true,
        help: "Zatwierdź zmiany z komentarzem"
    },
    'git log --oneline': {
        output: `7a8b9c2 (HEAD -> main) test commit
3f4e5d6 Fix navigation bug
2a1b3c4 Add interactive terminal
1d2e3f4 Initial commit`,
        correct: true,
        help: "Pokaż skróconą historię commitów"
    },
    'git push origin main': {
        output: `Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 8 threads
Compressing objects: 100% (12/12), done.
Writing objects: 100% (15/15), 3.45 KiB | 1.15 MiB/s, done.
Total 15 (delta 8), reused 0 (delta 0)
To github.com:user/repo.git
   3f4e5d6..7a8b9c2  main -> main`,
        correct: true,
        help: "Wyślij zmiany do zdalnego repozytorium"
    },
    'git push main origin': {
        output: `error: src refspec main does not match any
error: failed to push some refs to 'origin'`,
        correct: false,
        error: true,
        help: "Zła kolejność parametrów. Poprawnie: git push origin main"
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize animated background
    initAnimatedBackground();
    
    // Initialize terminal
    initTerminal();
    
    // Initialize quiz
    initQuiz();
    
    // Initialize progress tracking
    updateProgress();
    
    // Initialize animations
    initAnimations();
}

// Animated background using p5.js
function initAnimatedBackground() {
    new p5(function(p) {
        let particles = [];
        
        p.setup = function() {
            let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.parent('animatedBackground');
            
            // Create particles
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(1, 3)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and draw particles
            for (let particle of particles) {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                // Draw particle
                p.fill(0, 255, 136, 100);
                p.noStroke();
                p.circle(particle.x, particle.y, particle.size);
            }
            
            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    let dist = p.dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                    if (dist < 100) {
                        p.stroke(0, 255, 136, 50);
                        p.strokeWeight(0.5);
                        p.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                    }
                }
            }
        };
        
        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    });
}

// Terminal functionality
function initTerminal() {
    const terminalInput = document.getElementById('terminalInput');
    
    if (terminalInput) {
        terminalInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const command = terminalInput.textContent.trim();
                executeCommand(command);
                terminalInput.textContent = '';
            }
        });
        
        terminalInput.addEventListener('input', function() {
            // Prevent multiple lines
            this.textContent = this.textContent.replace(/\n/g, '');
        });
    }
}

function executeCommand(command) {
    if (!command) return;
    
    commandsCount++;
    const terminalOutput = document.getElementById('terminalOutput');
    const commandData = gitCommands[command];
    
    // Add command to history
    terminalHistory.push({
        command: command,
        timestamp: new Date(),
        correct: commandData ? commandData.correct : false
    });
    
    // Create output HTML
    let outputHTML = `
        <div class="mb-2">
            <div class="text-neon-primary">$ ${command}</div>
    `;
    
    if (commandData) {
        if (commandData.error) {
            outputHTML += `<div class="text-red-400">${commandData.output}</div>`;
            errorCount++;
        } else {
            outputHTML += `<div class="text-text-primary">${commandData.output}</div>`;
            correctCommands++;
        }
    } else {
        outputHTML += `<div class="text-yellow-400">Command not found: ${command}</div>`;
        outputHTML += `<div class="text-text-muted">Type 'help' for available commands</div>`;
        errorCount++;
    }
    
    outputHTML += '</div>';
    outputHTML += '<div class="mt-2">$ <span id="terminalInput" contenteditable="true" class="outline-none"></span><span class="terminal-cursor">█</span></div>';
    
    // Update terminal output
    terminalOutput.innerHTML = outputHTML + terminalOutput.innerHTML;
    
    // Re-initialize terminal input
    initTerminal();
    
    // Update statistics
    updateTerminalStats();
    
    // Update command help
    updateCommandHelp(command);
    
    // Update progress
    updateProgress();
}

function updateTerminalStats() {
    const commandsCountEl = document.getElementById('commandsCount');
    const correctCommandsEl = document.getElementById('correctCommands');
    const errorCountEl = document.getElementById('errorCount');
    
    if (commandsCountEl) commandsCountEl.textContent = commandsCount;
    if (correctCommandsEl) correctCommandsEl.textContent = correctCommands;
    if (errorCountEl) errorCountEl.textContent = errorCount;
}

function updateCommandHelp(command) {
    const commandHelp = document.getElementById('commandHelp');
    if (!commandHelp) return;
    
    const commandData = gitCommands[command];
    if (commandData && commandData.help) {
        const helpHTML = `
            <div class="p-3 bg-surface rounded">
                <div class="font-mono text-neon-primary">${command}</div>
                <div class="text-text-muted mt-1">${commandData.help}</div>
            </div>
        `;
        commandHelp.innerHTML = helpHTML + commandHelp.innerHTML;
        
        // Keep only last 3 helps
        const helps = commandHelp.children;
        if (helps.length > 3) {
            commandHelp.removeChild(helps[helps.length - 1]);
        }
    }
}

// Quiz functionality
function initQuiz() {
    currentQuizQuestion = 0;
    quizScore = 0;
    quizAnswered = false;
    loadQuizQuestion();
}

function loadQuizQuestion() {
    if (currentQuizQuestion >= quizQuestions.length) {
        showQuizResults();
        return;
    }
    
    const question = quizQuestions[currentQuizQuestion];
    const questionText = document.getElementById('questionText');
    const quizOptions = document.getElementById('quizOptions');
    const currentQuestionEl = document.getElementById('currentQuestion');
    const totalQuestionsEl = document.getElementById('totalQuestions');
    const quizProgress = document.getElementById('quizProgress');
    
    if (questionText) questionText.textContent = question.question;
    if (currentQuestionEl) currentQuestionEl.textContent = currentQuizQuestion + 1;
    if (totalQuestionsEl) totalQuestionsEl.textContent = quizQuestions.length;
    
    // Update progress
    const progress = ((currentQuizQuestion + 1) / quizQuestions.length) * 100;
    if (quizProgress) quizProgress.style.width = progress + '%';
    
    // Load options
    if (quizOptions) {
        quizOptions.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'quiz-option p-4 border border-border rounded-lg';
            optionEl.onclick = () => selectAnswer(index);
            optionEl.innerHTML = `<span class="font-mono">${option}</span>`;
            quizOptions.appendChild(optionEl);
        });
    }
    
    // Reset next button
    const nextBtn = document.getElementById('nextQuestionBtn');
    if (nextBtn) {
        nextBtn.disabled = true;
        nextBtn.className = 'bg-neon-primary text-bg-dark px-6 py-3 rounded-lg font-semibold opacity-50 cursor-not-allowed';
    }
    
    quizAnswered = false;
}

function selectAnswer(answerIndex) {
    if (quizAnswered) return;
    
    const question = quizQuestions[currentQuizQuestion];
    const options = document.querySelectorAll('.quiz-option');
    const nextBtn = document.getElementById('nextQuestionBtn');
    
    // Mark all options
    options.forEach((option, index) => {
        option.onclick = null;
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === answerIndex && index !== question.correct) {
            option.classList.add('incorrect');
        }
    });
    
    // Update score
    if (answerIndex === question.correct) {
        quizScore++;
        const scoreEl = document.getElementById('quizScore');
        if (scoreEl) scoreEl.textContent = quizScore;
    }
    
    // Enable next button
    if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.className = 'bg-neon-primary text-bg-dark px-6 py-3 rounded-lg font-semibold hover-lift';
    }
    
    quizAnswered = true;
}

function nextQuestion() {
    currentQuizQuestion++;
    loadQuizQuestion();
}

function showQuizResults() {
    const quizContent = document.getElementById('quizContent');
    const quizResults = document.getElementById('quizResults');
    const finalScore = document.getElementById('finalScore');
    
    if (quizContent) quizContent.classList.add('hidden');
    if (quizResults) quizResults.classList.remove('hidden');
    if (finalScore) finalScore.textContent = quizScore;
    
    // Update progress
    updateProgress();
}

function restartQuiz() {
    const quizContent = document.getElementById('quizContent');
    const quizResults = document.getElementById('quizResults');
    
    if (quizContent) quizContent.classList.remove('hidden');
    if (quizResults) quizResults.classList.add('hidden');
    
    initQuiz();
}

// Progress tracking
function updateProgress() {
    const overallProgress = document.getElementById('overallProgress');
    if (!overallProgress) return;
    
    // Calculate progress based on various factors
    let progress = 0;
    
    // Terminal usage (max 40%)
    if (commandsCount > 0) progress += Math.min(commandsCount * 2, 40);
    
    // Quiz completion (max 30%)
    if (quizQuestions.length > 0) {
        progress += (quizScore / quizQuestions.length) * 30;
    }
    
    // Tutorial progress (max 30%)
    // This would be updated when tutorials are completed
    
    overallProgress.style.width = progress + '%';
    
    // Save progress to localStorage
    const progressData = {
        commandsCount,
        correctCommands,
        errorCount,
        quizScore,
        currentQuizQuestion,
        lastVisit: new Date().toISOString()
    };
    localStorage.setItem('gitmaster-progress', JSON.stringify(progressData));
}

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('gitmaster-progress');
    if (saved) {
        const data = JSON.parse(saved);
        commandsCount = data.commandsCount || 0;
        correctCommands = data.correctCommands || 0;
        errorCount = data.errorCount || 0;
        quizScore = data.quizScore || 0;
        currentQuizQuestion = data.currentQuizQuestion || 0;
        
        updateTerminalStats();
        updateProgress();
    }
}

// Animations
function initAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.hover-lift').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Typewriter effect for hero title with single-line replacement to prevent layout shift
    if (typeof Typed !== 'undefined') {
        const demo = document.getElementById('terminalDemo');
        if (demo) {
            const sequence = [
                '<span class="text-text-primary">$</span> git push main origin',
                '<span class="text-red-400">error: src refspec main does not match any</span>',
                '<span class="text-red-400">error: failed to push some refs to \"origin\"</span>',
                '<span class="text-yellow-400"># Poprawna składnia:</span>',
                '<span class="text-text-primary">$</span> <span class="text-green-400">git push origin main</span>',
                '<span class="text-green-400">✓ Successfully pushed to origin/main</span>'
            ];

            // Prepare container: one line span + cursor, so text always stays in the same place
            demo.innerHTML = '<span id="terminalDemoLine"></span><span class="terminal-cursor">█</span>';
            const lineEl = document.getElementById('terminalDemoLine');

            // Measure tallest line to set min-height and avoid any twitching
            function measureTallest() {
                const probe = document.createElement('div');
                probe.className = 'terminal-output text-left text-neon-primary';
                probe.style.position = 'absolute';
                probe.style.visibility = 'hidden';
                probe.style.pointerEvents = 'none';
                probe.style.whiteSpace = 'pre-wrap';
                probe.style.width = (demo.clientWidth || 600) + 'px';
                let maxH = 0;
                sequence.forEach(html => {
                    probe.innerHTML = html;
                    document.body.appendChild(probe);
                    maxH = Math.max(maxH, probe.offsetHeight);
                    document.body.removeChild(probe);
                });
                demo.style.minHeight = maxH + 'px';
            }

            measureTallest();
            window.addEventListener('resize', measureTallest);

            let typedInstance = null;
            function typeAt(index) {
                if (!lineEl) return;
                if (typedInstance) {
                    try { typedInstance.destroy(); } catch (e) {}
                }
                lineEl.innerHTML = '';
                typedInstance = new Typed('#terminalDemoLine', {
                    strings: [sequence[index]],
                    typeSpeed: 50,
                    backSpeed: 0,
                    showCursor: false,
                    smartBackspace: false,
                    loop: false,
                    onComplete: function() {
                        setTimeout(() => {
                            const next = index + 1;
                            if (next < sequence.length) {
                                typeAt(next);
                            }
                        }, 650);
                    }
                });
            }

            typeAt(0);
        }
    }
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMobileMenu() {
    // Mobile menu toggle functionality
    console.log('Mobile menu toggled');
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus terminal
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const terminalInput = document.getElementById('terminalInput');
        if (terminalInput) {
            terminalInput.focus();
        }
    }
    
    // Escape to blur terminal
    if (e.key === 'Escape') {
        const terminalInput = document.getElementById('terminalInput');
        if (terminalInput && document.activeElement === terminalInput) {
            terminalInput.blur();
        }
    }
});

// Load progress on page load
window.addEventListener('load', loadProgress);

// Export functions for global access
window.executeCommand = executeCommand;
window.selectAnswer = selectAnswer;
window.nextQuestion = nextQuestion;
window.restartQuiz = restartQuiz;
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;