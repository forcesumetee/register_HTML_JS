function validateForm() {
    const firstName = document.getElementsByName('firstname')[0].value;
    const lastName = document.getElementsByName('lastname')[0].value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const birthday = document.getElementsByName('bday')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementsByName('password')[0].value;
    const retypePassword = document.getElementsByName('retypepassword')[0].value;

    // ตรวจสอบว่ากรอกข้อมูลครบทุกช่อง
    if (
        firstName === '' ||
        lastName === '' ||
        !gender ||
        birthday === '' ||
        email === '' ||
        username === '' ||
        password === '' ||
        retypePassword === ''
    ) {
        document.getElementById('errormsg').textContent = 'กรุณากรอกข้อมูลให้ครบทุกช่อง';
        return false;
    }

    // ตรวจสอบว่ารหัสผ่านและรีไทป์รหัสผ่านตรงกัน
    if (password !== retypePassword) {
        document.getElementById('errormsg').textContent = 'รหัสผ่านไม่ตรงกัน';
        return false;
    }

    alert("สมัครเรียบร้อย")
    // เมื่อลงทะเบียนสำเร็จ ให้เรียกฟังก์ชัน login() สำหรับเข้าสู่ระบบโดยอัตโนมัติ
    login();

    return true;
}

function login() {
    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementsByName('password')[0].value;

    // ส่งค่า username และ password ไปยังหน้า Login (login.html)
    window.location.href = `login.html?username=${username}&password=${password}`;
}
