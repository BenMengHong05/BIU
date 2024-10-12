#include<iostream>
using namespace std;
int main(){
    float number1,number2;
    float tape;
    cout<<"\t =============>>Hello world<<=============\n";
    cout<<"\t Enter value 1 :";
    cin>>number1;
    cout<<"\t Enter value 2 :";
    cin>>number2;
    char mh;
    cout<<"\t value \n\t+,\n\t-,\n\t*,\n\t/";
    cout<<"\t Enter :";
    cin>>mh;
        switch(mh){
            case '+':
                tape = number1 + number2;
                break;
            case '-':
                tape = number1 - number2;
                break;
            
            case '*':
                tape = number1 * number2;
                break;

            case '/':
                tape = number1 / number2;
                break;
            
  
        }
        cout<<"\t view mh = "<<mh<<endl;
        cout<<"\t view tape = "<<tape<<endl;





    return 0;
}