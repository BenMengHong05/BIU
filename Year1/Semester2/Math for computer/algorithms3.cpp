#include<iostream>
#include <conio.h>
using namespace std;
int main() {
    start:
    system("cls");
    float newnumber,oldnumber,used,pay;
    cout << "Enter NewNumber ";
    cin >> newnumber;
    cout << "Enter Old Number ";
    cin >> oldnumber;
    if(oldnumber>=newnumber){
        cout<<"\n input Wrong";
        getch();
        system("cls");
        goto start;
    }
    else{
        used = newnumber - oldnumber;
        if(used<100){
            pay = used*600;
        }
        if(used>=100 && used<=200){
            pay = (100*600)+((used-200)*800);
        }
        if(used>200){
            pay = (100*600)+(100*800)+((used-200)*1000);
        }
        cout<<"Used ="<<used<<endl;
        cout<<"Used Pay ="<<pay<<"$"<<endl;
        getch();
        system("cls");
        goto start;
    }
    return 0;
}