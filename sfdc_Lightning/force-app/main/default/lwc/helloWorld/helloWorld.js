import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement 
{
    @track buttonClickedLabel = '';
    
    num1 = 0;
    count = 0;
    operatorFlag = false;
    previousOperatorClicked ='';
    
    handleClick(event) 
    {
       if(isNaN(event.target.title) === false)
        {
                if(this.operatorFlag === true)
                {
                    this.num1 = Number(this.buttonClickedLabel);
                    this.buttonClickedLabel = '';
                    this.operatorFlag = false;
                }
                
                this.buttonClickedLabel += event.target.title;
                
        }
        else
        {
            this.operatorFlag = true;
            this.count++;
            
            if(this.count > 1)
            {
                switch(this.previousOperatorClicked) 
                {
                    case "plus":
                    this.num1 += Number(this.buttonClickedLabel);
                    break;
                    case "minus":
                    this.num1 -= Number(this.buttonClickedLabel);
                    break;
                    case "div":
                    this.num1 /= Number(this.buttonClickedLabel);
                    break;
                    case "mul":
                    this.num1 *= Number(this.buttonClickedLabel);
                    break;
                    default:
                    break;
                    
                }
                this.buttonClickedLabel = this.num1;
            }
            this.previousOperatorClicked = event.target.title;
            
        }
    }

}