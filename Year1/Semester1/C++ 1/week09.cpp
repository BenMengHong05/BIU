#include<iostream>
#include<iomanip>
using namespace std;
int main(){
    /*int score;
    cout<<"\tinput score : ";
    cin>>score;

    if(score >= 100 ){
        cout<<"\tyou pass A ";
    }
    else if(score >= 50 ){
        cout<<"\tyou pass b";
    }else{
        cout<<"\tyou failed";
    }*/
    //login
    //សម្រាប់windows clear = cls, សម្រាប់make clear
    cout<<fixed<<showpoint<<setprecision(4);
    restart:
    string username,password;
    int id;
    string name;
    int age;
    char gender;
    string grade;
    float money1,money2,money3,money4,money5;
    double total_money;
    double average;
    cout<<"\t=========================>>student like money<<=========================\n";
    cout<<"Enter username : ";
    cin>>username;
    cout<<"Enter password : ";
    cin>>password;
    if(username == "MengHong" || password == "001"){
        cout<<"wellcome to my class........\n";
        system("cls");
    }else{
        cout<<"you pless again........\n";
        system("cls");
        goto restart;
    }
    cout<<"\t=========================>>student like money<<=========================\n";
    cout<<"\tstuden id : ";
    cin>>id;
    cout<<"\tstuden name : ";
    cin>>name;
    cout<<"\tstuden age : ";
    cin>>age;
     cout<<"\tstuden gander : ";
    cin>>gender;
    cout<<"\tstuden money1 : ";
    cin>>money1;
    cout<<"\tstuden moneyn2 : ";
    cin>>money2;
    cout<<"\tstuden money3 : ";
    cin>>money3;
    cout<<"\tstuden money4 : ";
    cin>>money4;
    cout<<"\tstuden money5 : ";
    cin>>money5;
    total_money = money1+money2+money3+money4+money5; 
    average = total_money/5;
    cout<<"\ttotal_money : "<<money1+money2+money3+money4+money5;
    cout<<"\taverage : "<<total_money/5;
    if(average >= 95){
        grade ="A+";
    }else if(average >=90){
        grade = "A";
    }else if(average >=80){
        grade = "B";
    }else if(average >=70){
        grade = "C";
    }else if(average >=60){
        grade = "D";
    }else if(average >=50){
        grade = "E";
    }else{
        grade = "F";
    }
    system("cls");
    cout<<"\t=========================>>student like money<<=========================\n";
    cout<<"\tStudent Id = "<<id<<endl;
    cout<<"\tStudent Name = "<<name<<endl;
    cout<<"\tStudent Age = "<<age<<endl;
    cout<<"\tStudent Gender = "<<gender<<endl;
    cout<<"\tStudent money1 = "<<money1<<endl;
    cout<<"\tStudent money2 = "<<money2<<endl;
    cout<<"\tStudent money3 = "<<money3<<endl;
    cout<<"\tStudent money4 = "<<money4<<endl;
    cout<<"\tStudent money5 = "<<money5<<endl;
    cout<<"\tStudent Total_money = "<<total_money<<endl;
    cout<<"\tStudent Average = "<<average<<endl;
    cout<<"\tStudent Grade = "<<grade<<endl;
    return 0;
}