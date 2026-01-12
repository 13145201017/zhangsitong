// 表白文本内容
const confessionText = [
    "亲爱的，",
    "自从遇见你，我的世界就充满了色彩。",
    "你的笑容，是我每天最期待的礼物。",
    "我愿意用我的所有，换取你的幸福。"
];
const sender = "[胡]"; // 署名
const textDisplay = document.getElementById("text-display");
const inputArea = document.getElementById("input-area");
const answerInput = document.getElementById("answer");
const submitBtn = document.getElementById("submit-btn");
const resultDisplay = document.getElementById("result-display");

// 打字机效果函数
function typeWriter(text, index, speed, callback) {
    if (index < text.length) {
        textDisplay.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeWriter(text, index, speed, callback), speed);
    } else {
        // 单段文字打完后换行
        textDisplay.innerHTML += "<br>";
        if (callback) callback();
    }
}

// 逐行打印表白文本
function printConfessionText(textArray, currentIndex = 0) {
    if (currentIndex < textArray.length) {
        typeWriter(textArray[currentIndex], 0, 80, () => {
            printConfessionText(textArray, currentIndex + 1);
        });
    } else {
        // 所有文本打印完后显示输入框
        setTimeout(() => {
            inputArea.classList.remove("hidden");
            textDisplay.classList.remove("typing");
        }, 1000);
    }
}

// 处理提交按钮点击
submitBtn.addEventListener("click", () => {
    const answer = answerInput.value.trim();
    let result = "";
    // 判断输入结果
    if (["是", "YES", "y", "Y"].includes(answer)) {
        result = `太棒了！我会永远爱你！❤️<br><br>爱你的，${sender}`;
    } else {
        result = `没关系，我会继续努力，直到你点头为止！💪<br><br>爱你的，${sender}`;
    }
    // 隐藏输入框，显示结果
    inputArea.classList.add("hidden");
    resultDisplay.classList.remove("hidden");
    resultDisplay.innerHTML = result;
});

// 页面加载后开始执行
window.onload = () => {
    textDisplay.classList.add("typing");
    printConfessionText(confessionText);
};
