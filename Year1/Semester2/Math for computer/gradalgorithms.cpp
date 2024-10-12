#include<iostream>
#include<conio.h>
using namespace std;
int main(){
    restart:
    float M,C,E,Scroe;
    cout<<"Input Marth :";
    cin>>M;
    cout<<"Input Computer :";
    cin>>C;
    cout<<"Input English :";
    cin>>E;
    Scroe = (M+C+E)/3;
    cout<<"Scroe :"<<Scroe<<endl;
    if(Scroe >= 90){
        cout<<"User grad A"<<endl;
    }
    else if(Scroe < 90 && Scroe >= 70){
        cout<<"User grad B"<<endl;
    }
    else if(Scroe < 70 && Scroe >= 50){
        cout<<"User grad C"<<endl;
    }else{;        cout<<"User grad F"<<endl;
    }
    cout<<"Press Key to Input Again :";
    getch();
    system("cls");
    goto restart;
    return 0;
}