module.exports = function toReadable (number) {
    let numCount = number.toString().length;
    let str = number.toString();
    let first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let tens2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let ans = ''
    if (numCount === 1){
        return first[number]

    }
    if (numCount === 2){
        if (str[0] === '1'){
            return tens2[str[1]]
        }
        if (str[1] === '0'){
            return tens[str[0]]
        }
        return tens[str[0]] + ' ' + first[str[1]]

    }
    if (numCount === 3){
        
        if (str[1] === '0'){ 
            
            if (str[2] === '0'){
                return first[parseInt(str[0])] + ' hundred'
                
            }

            return first[str[0]] + ' hundred ' + first[str[2]]
        }
        
        if (str[1] === '1') {
            return first[parseInt(str[0])] + ' hundred ' + tens2[str[2]]
        }
        if (str[2] === '0'){
            if (str[2])
            return first[parseInt(str[0])] + ' hundred ' + tens[str[1]]
        }
        return first[parseInt(str[0])] + ' hundred ' + tens[str[1]] + ' ' + first[str[2]]

        
    }
    }
