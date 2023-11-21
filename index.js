//input 
const dayI = document.getElementById("day");
const monthI = document.getElementById("month");
const yearI = document.getElementById("year");

//output
const dayO = document.getElementById("dd");
const monthO = document.getElementById("mm");
const yearO = document.getElementById("yy");

//Form Function

const form = document.querySelector("form");
form.addEventListener("submit",handleSubmit);


function validate() {
    const inputs = document.querySelectorAll("input");
    let errorMsg = true;

    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = "this field is required.";
            errorMsg = false;
        }else if (i === monthI && i.value > 12 || i.value <= 0) {
            monthI.style.borderColor = "red"
            monthI.parentElement.querySelector("small").innerText = "must be a value month.";
            errorMsg = false;
        } else if (i === dayI && i.value > 31 || i.value <= 0 ){
            dayI.style.borderColor = "red"
            dayI.parentElement.querySelector("small").innerText = "must be a value day.";
            errorMsg = false;
        } else {
            i.style.borderColor = "black"
            parent.querySelector("small").innerText = "";
        }
    });
    
    return errorMsg;
}



function handleSubmit(e) {
    
    e.preventDefault(); // หยุดการทำงานปกติของฟอร์มเมื่อมีการส่งข้อมูล

    if (validate()) { // ตรวจสอบความถูกต้องของข้อมูลที่ป้อนผ่าน validate function
        const day = parseInt(dayI.value); // รับค่าวันที่และแปลงเป็นตัวเลข
        const month = parseInt(monthI.value); // รับค่าเดือนและแปลงเป็นตัวเลข
        const year = parseInt(yearI.value); // รับค่าปีและแปลงเป็นตัวเลข

        // สร้างวัตถุ Date จากข้อมูลวันเกิดที่ผู้ใช้ป้อน
        const birthDate = new Date(year, month - 1, day);

        const today = new Date(); // สร้างวัตถุ Date สำหรับวันปัจจุบัน

        // คำนวณความแตกต่างของวันที่ปัจจุบันกับวันเกิดเป็น millisecond
        const ageInMilliseconds = today - birthDate;

        // สร้างวัตถุ Date จากค่า millisecond ที่ได้ (ageInMilliseconds)
        const ageDate = new Date(ageInMilliseconds); 

        // คำนวณอายุจากวันที่ได้โดยใช้ getFullYear() และลบด้วย 1970
        const years = ageDate.getFullYear() - 1970;

        // รับค่าเดือนและวันในวันที่คำนวณได้
        const months = ageDate.getMonth();
        const days = ageDate.getDate();

        // แสดงผลลัพธ์อายุในส่วนของ HTML ที่มี id เป็น yearO, monthO, dayO
        yearO.innerText = years;
        monthO.innerText = months;
        dayO.innerText = days;
    }
}
