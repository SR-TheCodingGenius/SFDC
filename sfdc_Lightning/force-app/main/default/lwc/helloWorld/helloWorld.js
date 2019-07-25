import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement 
{
    @track buttonClickedLabel = '';
    handleClick(event) 
    {
        var num1 = 0;
        var count = 0;
        var operatorFlag = false;

        if( Number(event.target.label) >= 0 && Number(event.target.label) <= 9)
        {
            if(operatorFlag === true)
            {
                num1 = Number(this.buttonClickedLabel);
                this.buttonClickedLabel = '';
                operatorFlag = false;
            }
            this.buttonClickedLabel += event.target.label;
            
        }
        else
        {
            operatorFlag = true;
            count++;
            if(count > 1)
            {
                switch(event.target.label) 
                {
                    case "+":
                    num1 += Number(this.buttonClickedLabel);
                    break;
                    case "-":
                    num1 -= Number(this.buttonClickedLabel);
                    break;
                    case "/":
                    num1 /= Number(this.buttonClickedLabel);
                    break;
                    case "*":
                    num1 *= Number(this.buttonClickedLabel);
                    break;
                    default:
                    break;
                    
                }
            }
        }
    }

}