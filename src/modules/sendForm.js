/*const sendForm = () => {
    let phoneForm = document.querySelectorAll('.phone-user'),
        textForm = document.querySelectorAll('input[type=text]'),
        forms = document.querySelectorAll('form');

    phoneForm.forEach((elem) => {
        elem.addEventListener('input', () => {

            let res = elem.value.match(/^\+?[0-9]*$/g);
            elem.value = '';
            if (res) {
                elem.value = res.join(',');
            }
        });
    });

    textForm.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^а-яА-я;,!\s]/g, "");
        });
    });



    forms.forEach((item) => {
        item.addEventListener('submit', function (event) {
            event.preventDefault();            
           
                    
            postData(result)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status is not 200');

                    }

                    let inputs = document.querySelectorAll('input');
                    inputs.forEach((elem) => {
                        elem.value = '';
                    });
                })
                .catch((error) => {
                    
                    console.log(error);
                });
           
        });

    });


    const postData = (result) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: JSON.stringify(body)
        
        });
       
    };


};*/

//export default sendForm;

