window.onload = function () {
    var step = document.querySelectorAll('.step1,.step2, .step3'),
        slider = next(step);

    function next(arr) {
        console.log(arr)
        var max = arr.length - 1,
            i = 0;
        return function () {
            if (i >= max) {
                return;
            };
            i++;
            console.log(i);
            return arr[i];
        }
    };
    document.querySelector('.btn').addEventListener('click', show);

    function valid() {

    }
    var i = 0;

    function show() {
        var element = slider(),

            name_pattern = /[0-9a-zA-Z]{3,}/i,
            meil_pattern = /w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            pass_pattern = /[0-9a-zA-Z]{6,}/,


            input = document.querySelectorAll('input'),
            max = input.length - 1;
        if (i > max) return;
        var value = input[i].value;
        var prov = name_pattern.test(value);
        if (prov == true) {

            i++;
            if (!element) return;
            element.style.display = 'block';
            element.previousElementSibling.style.display = 'none';
        } else {
            var error = document.querySelector('.error');
            error.style.visibility = 'visible';
        };



    };



}

//  if (input[i].name == 'name') {
//            if (prov == true) {
//                i++;
//                if (!element) return;
//                element.style.display = 'block';
//                element.previousElementSibling.style.display = 'none';
//            } else {
//                var error = document.querySelector('.error');
//                
//                error.display = 'block';
//            }
//            if (prov1 == true) {
//                i++;
//                if (!element) return;
//                element.style.display = 'block';
//                element.previousElementSibling.style.display = 'none';
//            } else if (prov2 == true) {
//                i++;
//                if (!element) return;
//                element.style.display = 'block';
//                element.previousElementSibling.style.display = 'none';
//            } else
//                var error = document.querySelector('.error');
//            error.display = 'block';
//        };
//
//
//
//    };
