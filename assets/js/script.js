function valor(){
    const texto = document.getElementById('text').value;
    const numero = document.getElementById('mumero').value;

    const transforNumero = parseFloat(numero);

    let resul = document.getElementById('resul').value;

            switch (texto) {
                case 'cm':
                    resul = transforNumero * 100;
                    document.getElementById('resul').value = resul + 'cm';
                break;
                case 'km':
                    resul = transforNumero / 1000;
                    document.getElementById('resul').value = resul + 'km';
                break;
                case 'mm':
                    resul = transforNumero * 1000;
                    document.getElementById('resul').value = resul + 'mm';
                break;
                case 'dm':
                    resul = transforNumero * 10;
                    document.getElementById('resul').value = resul + 'dm';
                break;
                case 'dam':
                    resul = transforNumero / 10;
                    document.getElementById('resul').value = resul + 'dam';
                break;
                case 'hm':
                    resul = transforNumero / 100;
                    document.getElementById('resul').value = resul + 'hm';
                break;
                default:
                    alert('Opção Inválida');
            }
        
        
    }


