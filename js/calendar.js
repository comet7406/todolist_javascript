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
        contentText.addEventListener("click", () => {
            handleDateClick(currentDate.getDate());
        });
        content.appendChild(contentText);
        cell.appendChild(content);
        weekRow.appendChild(cell);

        if (currentDate.getDay() === 6 || currentDate.getTime() === lastDay.getTime()) {
            calendarBody.appendChild(weekRow);
            weekRow = document.createElement("tr");
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }

    monthDisplay.textContent = `${calendarDate.getFullYear()}년 ${calendarDate.getMonth() + 1}월 ${calendarDate.getDate()}일`;
}

// Define the formatDate function
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

// ... (rest of your code)

// Now you can use the formatDate function
function handleDateClick(date) {
const selectedDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), date);
const formattedDate = formatDate(selectedDate);

const todolistDate = document.querySelector(".todolist-date");
todolistDate.textContent = formattedDate;
}

// ... (rest of your code)


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
  calendar.innerHTML = "";
}

const modifyCalendarSubmitButtonOnClick = (id) => {
  const newCreateDate = document.querySelector(".todolist-date").value;
  const todo = TodoListService.getInstance().getTodoById(id);
  // if(todo.todoContent === newTodoContent || !newTodoContent) {
  //     return;
  // }
  const todoObj = {
      ...todo,
      createDate: newCreateDate
  }
  TodoListService.getInstance().setTodo(todoObj);
}


const calendarModal = (todo) => {
  const calendar = document.querySelector(".calendar");
  calendar.innerHTML = `
    <div class="calendar-container">
      <header class="calendar-header">
          <button id="beforebtn" class="btn-cal prev">◀</button>
          <div class="calendar-month"></div>
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
          <button class="btn" onclick="modifyCalendarSubmitButtonOnClick(${todo.id}); closeCalendarModal()">확인</button>
          <button class="btn" onclick="closeCalendarModal();">닫기</button>
      </footer>
    </div>
  `
}