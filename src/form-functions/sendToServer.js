import axios from 'axios';
function sendEmail(){
        if(recipient_email && password){
            axios.post('http://localhost:5000/send_email',{
                recipient_email: 'aleksgayda@gmail.com',
                password: '123456Aaa',
            }).then(() => alert('Message sent successfully'))
            .catch(() => alert("aboba"));
            return;
        }
        return alert("Fill all fields");
    }