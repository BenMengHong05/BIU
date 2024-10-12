/*#include<iostream>
#include<cmath>
#include<algorithm>
using namespace std;
int main(){
    //int x=2,y=3; or pow(2,3)
    cout<<pow(4,5)<<endl;//ប្រភេទស្វ័យគុណ
    cout<<sqrt(81)<<endl;
    cout<<max(10,50)<<endl;
    cout<<log(4)<<endl;
    cout<<round(6.6)<<endl;//(5.4))ប្រគត់ឡើង (4.6)ប្រគត់ចុះ
    cout<<abs(-5)<<endl;
    return 0;

}*/


#include<iostream>
#include<windows.h>
using namespace std;
string username,password;
void login(){
    string username,password;
    cout<<"\t*****************>>Login<<*****************\n";
    cout<<"\tEnter username = \n";
    cin>>username;
    cout<<"\tEnter password = \n";
    cin>>password;
        if(username == "MengHong" && password =="007"){
            cout<<"\tLoding.....\n";
            for(int i=1 ;i<=30;i++){
                Sleep(10);
                system("color 2b");//
                cout<<".";
            }
            cout<<"\t wellcome system .....\n";
        }else{
            cout<<"\tyou try agin.....\n";
            system("cls");
 }

 void verified(){
    if(password == "0000"){
        Sleep(10);
        cout<<"\tyou confirm..\n";


    }else{
        Sleep(10);
        cout<<"\t you try agin...";
        system("color t");
    }



 }


}
void PIN(){
    PIN:
    int PIN;
    cout<<"\tconfirm PIN =\n";
    cin>>PIN;

    if(PIN == 007001){
        Sleep(10);
        cout<<"\tpassword cofirm...\n";
        system("color J");
    }
    else{
        cout<<"\tyou fail try agin....\n";

    }


}
int main() {
    system("cls");
    login();
    PIN();
    return 0;
}


#include <iostream>
#include <windows.h>
using namespace std;
string username, password;
void login()
{

    cout << "\t==================================>>Login<<==================================\n";
    cout << "\tEnter username =";
    cin >> username;
    cout << "\tEnter password =";
    cin >> password;
    if (username == "MengHong" && password == " 001")
    {
        cout << "\tloding...\n";
        for (int i = 1; i <= 10; i++)
        {
            Sleep(10);
            system("color b");
            cout << ".";
        }
        cout << "\twellcome system..\n";
    }
    else
    {
        cout << "\tloding...\n";
        for (int i = 1; i <= 10; i++)
        {
            Sleep(10);
            system("color b");
            cout << ".";
        }
    }
}
void PIN()
{
    PIN;
    int PIN;
    cout << "\tEnter PIN =";
    cin >> PIN;
    if (PIN == 007001)
    {

        cout << "\t confirm...\n";
        for (int i = 1; i <= 10; i++)
        {
            Sleep(10);
            system("color t");
            cout << ".";
            system("cls");
        }
        cout << "\tverified\n";
    }
    else
    {
        cout << "\tloding...";
        for (int i = 1; i <= 10; i++)
        {
            Sleep(10);
            system("color b");
            cout << ".";
        }
        cout << "\ttry agin\n";
        system("cls");
    }
}
void menghong()
{
    cout << "\t=======================>>BIU ATM MACHINE <<=======================\n";
    cout << "\t1.Check Balence\n";
    cout << "\t2.Deposit\n";
    cout << "\t3.whithdraw\n";
    cout << "\t4.Exit\n";
    cout << "\t=======================>>BTU ATM MACHINE<<=======================\n";
    system("color 4");
}

int main(){

    login();
    system("cls");
    system("cls");
    PIN();
    system("cls");
    menghong();
    return 0;
}
