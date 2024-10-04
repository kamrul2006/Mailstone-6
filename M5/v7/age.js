function ageclick() {
    const inp = document.getElementById('age')
    const ageText = inp.value;
    const age = parseInt(ageText)
    const errorTag = document.getElementById('pra')

    try {
        // console.log(B_baria)
        if(isNaN(age)){
        throw ' Pleas enter a number.'
        }
        else if (age < 18) {
            throw 'Age under 18 is not Allowed.'
        }
        else if (age > 29) {
            throw "Age more Than 30 is Not Allowed."
        }
        errorTag.innerHTML = ''
    }

    catch (err) {
        console.log('ERROR:', err)
        errorTag.innerHTML = 'ERROR:' + err
    }

    finally {
        console.log('All done Inside try and catch.')
    }
    console.log(1111)
}


