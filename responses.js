// var codes = ["001","002"];

function getBotResponse(input) {
    
    if (input == "Kwarra") { 
        return "<span style='font-size:smaller'>- Made by: Dily Fashion Store -</span> <br /> Want to order this <strong>BLOUSE</strong>? <br /> <strong>Price:</strong> &#8358;9,000.0. <br /> Scroll to view all. &#8595; <br /> <br /> <strong>Front View</strong> <img data-toggle='modal' data-target='#exampleModalCenterAlafin' style='width:100%'  src='kwarrag.jpg' /> <br /> <br /> <strong>Back View</strong><img data-toggle='modal' data-target='#exampleModalCenterAlafin' style='width:100%'  src='kwarrag.jpg' /> <br /> <br /> Tap 'Kwarra' to give your measurements & order this <strong>BLOUSE</strong> from its designer. <br /> <a href='https://forms.gle/Z9fiDRvAnYSUQ2qA6'> <button class='order-button' style='border-radius:11px; border: 3px solid; padding-bottom: 7px; padding-top: 7px; padding-left: 20px; padding-right: 20px; margin-left: 5%; margin-top: 2%;'><strong>'Kwarra'</strong></button> <br /></a>";    
    } else if (input == "Fiji") {
        return "<span style='font-size:smaller'>- Made by: Rey Fashion Store -</span> <br /> Want to order this <strong>JACKET</strong>? <br /> <strong>Price:</strong> &#8358;9,000.0. <br /> Scroll to view all. &#8595; <br /> <br /> <strong>Front View</strong> <img id='Fiji' onclick='myFunction()' data-toggle='modal' data-target='#exampleModalCenterPaga' style='width:100%'  src='fiji.jpg' /> <br /> <br /> <strong>Back View</strong><img data-toggle='modal' data-target='#exampleModalCenterPaga' style='width:100%'  src='fiji.jpg' /> <br /> <br /> Tap 'Fiji' to give your measurements & order this <strong>JACKET</strong> from its designer. <br /> <a href='https://forms.gle/Z9fiDRvAnYSUQ2qA6'> <button class='order-button' style='border-radius:11px; border: 3px solid; padding-bottom: 7px; padding-top: 7px; padding-left: 20px; padding-right: 20px; margin-left: 5%; margin-top: 2%;'><strong>'Fiji'</strong></button> <br /></a>";


    // } else if (input == "Etono") {
    //     return "Want to order this <strong>SHIRT</strong>? <br /> Scroll to view all. &#8595; <br /> <br /> <strong>Front view</strong> <img data-toggle='modal' data-target='#exampleModalCenterEtono' style='width:100%'  src='008.jpg' /> <br /> <br /> <strong>Side view</strong> <br /> <img data-toggle='modal' data-target='#exampleModalCenterEtono' style='width:48%'  src='008.jpg' /> <img data-toggle='modal' data-target='#exampleModalCenterEtono' style='width:48%'  src='008.jpg' /> <br /> <br /> <strong>Back view</strong><img data-toggle='modal' data-target='#exampleModalCenterEtono' style='width:100%'  src='008.jpg' /> <br /> <br /> Tab below to give your measurements & order this <strong>WAIST COAT</strong> from the designer. <br /> <a href='https://forms.gle/tigeai2vJwLTX84A8' target='_blank'> <button class='order-button' style='border-radius:11px; border: 3px solid; padding: 10px; margin-left: 5%;'>Tab here for 'Etono'</button> <br /></a>";
    // } else if (input == "Fiji") {
    //     return "Want to order this <strong>WAIST COAT</strong>? <br /> Scroll to view all. &#8595; <br /> <br /> <strong>Front view</strong> <img style='width:100%'  src='005.jpg' /> <br /> <br /> <strong>Side view</strong> <br /> <img style='width:48%'  src='005.jpg' /> <img style='width:48%'  src='005.jpg' /> <br /> <br /> <strong>Back view</strong><img style='width:100%'  src='005.jpg' /> <br /> <br /> Tab below to give your measurements & order this <strong>WAIST COAT</strong> from the designer. <br /> <a href='https://forms.gle/tigeai2vJwLTX84A8' target='_blank'> <button class='order-button' style='border-radius:11px; border: 3px solid; padding: 10px; margin-left: 5%;'>Tab here for 'Fiji'</button> <br /></a>";


    // } else if (input == "Santi") {
    //     return "Want to order this <strong>WAIST COAT</strong>? <br /> Scroll to view all. &#8595; <br /> <br /> <strong>Front view</strong> <img style='width:100%'  src='005.jpg' /> <br /> <br /> <strong>Side view</strong> <br /> <img style='width:48%'  src='005.jpg' /> <img style='width:48%'  src='005.jpg' /> <br /> <br /> <strong>Back view</strong><img style='width:100%'  src='005.jpg' /> <br /> <br /> Tab below to give your measurements & order this <strong>WAIST COAT</strong> from the designer. <br /> <a href='https://forms.gle/tigeai2vJwLTX84A8' target='_blank'> <button class='order-button' style='border-radius:11px; border: 3px solid; padding: 10px; margin-left: 5%;'>Tab here for 'Santi'</button> <br /></a>";
    // } else if (input == "Nuro") {
    //     return "Want to order this <strong>WAIST COAT</strong>? <br /> Scroll to view all. &#8595; <br /> <br /> <strong>Front view</strong> <img style='width:100%'  src='005.jpg' /> <br /> <br /> <strong>Side view</strong> <br /> <img style='width:48%'  src='005.jpg' /> <img style='width:48%'  src='005.jpg' /> <br /> <br /> <strong>Back view</strong><img style='width:100%'  src='005.jpg' /> <br /> <br /> Tab below to give your measurements & order this <strong>WAIST COAT</strong> from the designer. <br /> <a href='https://forms.gle/tigeai2vJwLTX84A8' target='_blank'> <button class='order-button' style='border-radius:11px; border: 3px solid; padding: 10px; margin-left: 5%;'>Tab here for 'Nuro'</button> <br /></a>";

    
    // } else if (input == "Donye") {
    //     return "Want to order this <strong>BLOUSE</strong>? <br /> Scroll to view all. &#8595; <br /> <br /> <strong>Front view</strong> <img style='width:100%'  src='anka1.jpg' /> <br /> <br /> <strong>Side view</strong> <br /> <img style='width:48%;'  src='anka1.jpg' /> <img style='width:48%;' src='anka1.jpg' /> <br /> <br /> <strong>Back view</strong><img style='width:100%'  src='anka1.jpg' /> <br /> <br /> Tab below to give your measurements & order this <strong>BLOUSE</strong> from the designer. <br /> <a href='https://forms.gle/Z9fiDRvAnYSUQ2qA6' target='_blank'> <button class='order-button' style='border-radius:11px; border: 3px solid; padding: 10px; margin-left: 5%;'>Tab here for 'Donye'</button> <br /></a>";
    // } else if (input == "Botana") {
    //     return "Want to order this <strong>WAIST COAT</strong>? <br /> Scroll to view all. &#8595; <br /> <br /> <strong>Front view</strong> <img style='width:100%'  src='005.jpg' /> <br /> <br /> <strong>Side view</strong> <br /> <img style='width:48%'  src='005.jpg' /> <img style='width:48%'  src='005.jpg' /> <br /> <br /> <strong>Back view</strong><img style='width:100%'  src='005.jpg' /> <br /> <br /> Tab below to give your measurements & order this <strong>WAIST COAT</strong> from the designer. <br /> <a href='https://forms.gle/tigeai2vJwLTX84A8' target='_blank'> <button class='order-button' style='border-radius:11px; border: 3px solid; padding: 10px; margin-left: 5%;'>Tab here for 'Botana'</button> <br /></a>";


    } else {
        return "&#x1F60E Oops! We couldn't fetch that. <br /> Please confirm tag name & retry.";
    }

    // if (input == "003") {
    //     return "Hello there!";
    // } else if (input == "004") {
    //     return "Talk to you later!";
    // } else {
    //     return "&#x1F60E Oops! We couldn't match that. <br /> Confirm code & retry.";
    // }


    //rock paper scissors
    // if (input == "001") { 
    //     return 'popcorn';   
    // } else if (input == "002") {
    //     return "sorry, popcorn not available";
    // } else if (input == "scissors") {
    //     return "rock";
    // }

    
    
}





// Copy Content
function show() {
    let src=document.getElementById('div1');
    let tgt=document.getElementById('div2');

    ['standard','vip'].forEach( text=>{
        let label=document.createElement('label');
            label.innerText=label.for=text;

        let input=document.createElement('input');
            input.type='div';
            input.name='ticket';
            input.value=text;

        label.appendChild( input );

        input.addEventListener('click',function(e){
            tgt.innerText='ticket '+this.value
        });

        src.appendChild( label );
    });
}

document.addEventListener( 'DOMContentLoaded', show );