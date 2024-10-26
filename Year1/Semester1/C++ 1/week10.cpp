#include<iostream>
#include<iomanip>
using namespace std;
int main(){
    char letter;
    cout<<setw(20)<<"\t input letter M,A,E,N:";
    cin>>letter;
    switch(letter){

        case 'M':
               cout<<"good morning";
               break;
        case 'A':
               cout<<"good afternoon";
            break;
        case 'E':
               cout<<"good evening";
            break;
        case 'N':
            cout<<"good night";
        defaul:
        cout<<"\t you fail";\
        break;
    }
    




    return 0;
}
#include<iostream>

using namespace std;
int main(){
    float num1,num2;
    float result;
    char op;
    cout<<"\t=============>>Hello world<<=============\n";
    cout<<"\tEnter you value :";
    cin>>num1;
    cout<<"\tEnter for value :";
    cin>>num2;
    cout<<"\n\t+n\t-\n\t*\n\t /";
    cout<<"\tEnert :";
    cin>>op;
    switch(op){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
            default:
            cout<<"you fail";

        }
    cout<<"\t the option = "<<op<<endl;
    cout<<"\t result     = "<<result<<endl;







    return 0;
}