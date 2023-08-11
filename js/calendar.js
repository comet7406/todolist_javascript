const calendarBody = document.getElementById("calendar-body");
const monthDisplay = document.querySelector(".calendar-month");

let calendarDate = new Date();

function showCalendar() {
    const firstDay = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1);
    const lastDay = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0);

    calendarBody.innerHTML = "";

    let currentDate = new Date(firstDay);
    let weekRow = document.createElement("tr");

    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyCell = document.createElement("td");
        weekRow.appendChild(emptyCell);
    }

    while (currentDate <= lastDay) {
        const cell = document.createElement("td");
        const content = document.createElement("div");
        const contentText = document.createElement("span");
        contentText.textContent = currentDate.getDate();
        (function(date) {
            contentText.addEventListener("click", function() {
                handleDateClick(date.getDate());
            });
        })(new Date(currentDate.getTime()));
        
        // contentText.addEventListener("click", () => {
        //     handleDateClick(currentDate.getDate());
        // });
        content.appendChild(contentText);
        cell.appendChild(content);
        weekRow.appendChild(cell);

        if (currentDate.getDay() === 6 || currentDate.getTime() === lastDay.getTime()) {
            calendarBody.appendChild(weekRow);
            weekRow = document.createElement("tr");
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }

    monthDisplay.textContent = `${calendarDate.getFullYear()}년 ${calendarDate.getMonth() + 1}월`;
}


function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}


function handleDateClick(date) {
const selectedDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), date);
const formattedDate = formatDate(selectedDate);

const todolistDate = document.querySelector(".todolist-date");
todolistDate.textContent = formattedDate;
}


function beforeMonth() {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, calendarDate.getDate());
    showCalendar();
}

function nextMonth() {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, calendarDate.getDate());
    showCalendar();
}


document.getElementById("beforebtn").addEventListener("click", beforeMonth);

document.getElementById("nextbtn").addEventListener("click", nextMonth);

showCalendar();

const openCalendarModal = () => {
const calendar = document.querySelector(".calendar");
calendar.classList.remove("invisible");
}

const closeCalendarModal = () => {
const calendar = document.querySelector(".calendar");
calendar.classList.add("invisible");
const calendarBody = document.getElementById("calendar-body");
calendarBody.innerHTML = "";
}

const calendarModal = (year, month) => {

const calendar = document.querySelector(".calendar");
const calendarBody = document.getElementById("calendar-body");
if (!calendarBody) {

    const tbody = document.createElement("tbody");
        tbody.id = "calendar-body";
        tbody.className = "calendar-tbody";
        const table = calendar.querySelector(".calendar-table");
        table.appendChild(tbody);
        }

const existingCalendar = calendar.querySelector(".calendar-container");

if(existingCalendar) {
    const calendarMonth = existingCalendar.querySelector(".calendar-month");
    calendarMonth.textContent = `${year}년 ${month}월`;
    showCalendar();
} else {
    calendar.innerHTML = `
    <div class="calendar-container">
    <header class="calendar-header">
        <button id="beforebtn" class="btn-cal prev">◀</button>
        <div class="calendar-month">${year}년 ${month}월</div>
        <button id="nextbtn" class="btn-cal next">▶</button>
    </header>
    <div class="calendar-wrapper">
        <table class="calendar-table">
            <thead class="calendar-thead">
                <tr>
                    <th>일</th>
                    <th>월</th>
                    <th>화</th>
                    <th>수</th>
                    <th>목</th>
                    <th>금</th>
                    <th>토</th>
                </tr>
            </thead>
            <tbody id="calendar-body" class="calendar-tbody">
                
            </tbody>
        </table>
    </div>
    <footer class="calendar-footer">
        <button class="btn" onclick="closeCalendarModal();">확인</button>
        <button class="btn" onclick="closeCalendarModal();">닫기</button>
    </footer>
    </div>
`;

showCalendar();

}
}
  