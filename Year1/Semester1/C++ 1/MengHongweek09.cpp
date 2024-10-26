#include<iostream> 
#include<string>
#include<iomanip>
using namespace std;
int main(){
    cout<<fixed<<showpoint<<setprecision(2);

    start:
    string username,password;
    int id,age;
    string name;
    char gender;
    string grade;
    float score1,score2,score3,score4,score5;
    double total_score;
    double average;

    cout<<"\t==========>>LOGIN<<==========\n";
    cout<<"\tEnter name = ";
    cin>>username;
    cout<<"\tEnter Passwod = ";
    cin>>password;
        if(username == "MengHong"  && password == "007"){
            cout<<"\tWelcome to the system.....\n";
            system("cls");
        }else{
            cout<<"\tPlease try again later....";
            system("cls");
            goto start;
        }
        
        cout<<"\t==========>>STUDENT MANAGEMENT SYSTEM<<==========\n";
        cout<<"\tStudent Id = ";
        cin>>id;
        cout<<"\tStudent Name = ";
        cin>>name;
        cout<<"\tStudent Age = ";
        cin>>age;
        cout<<"\tStudent Gender = ";
        cin>>gender;
        cout<<"\tScore1 = ";
        cin>>score1;
        cout<<"\tScore2 = ";
        cin>>score2;
        cout<<"\tScore3 = ";
        cin>>score3;
        cout<<"\tScore4 = ";
        cin>>score4;
        cout<<"\tScore5 = ";
        cin>>score5;
        cout<<"\tTotal_score = "<<score1+score2+score3+score4+score5<<endl;
        total_score = score1+score2+score3+score4+score5;
        cout<<"\tAverage = "<<total_score/5<<endl;
        average = total_score/5;

        if(average >= 95 && average <100 ){
            grade = "A+";
        }else if(average >= 90 && average <95 ){
            grade = "A";
        }else if(average >= 80 && average <90 ){
            grade = "B";
        }else if(average >= 70 && average <80 ){
            grade = "C";
        }else if(average >= 60 && average <70 ){
            grade = "D";
        }else if(average >= 50 && average <60 ){
            grade = "E";
        }else if(average < 50 && average >= 0 ){
            grade = "F";
        }else{
            grade = " Wrong Input ";
        }
        system("cls");

        cout<<"\t==========>>STUDENT MANAGEMENT SYSTEM RESULT<<==========\n";
        cout<<"\tStudent Id = "<<id<<endl;
        cout<<"\tStudent Name = "<<name<<endl;
        cout<<"\tStudent Age = "<<age<<endl;
        cout<<"\tStudent Gender = "<<gender<<endl;
        cout<<"\tStudent Score1 = "<<score1<<endl;
        cout<<"\tStudent Score2 = "<<score1<<endl;
        cout<<"\tStudent Score3 = "<<score1<<endl;
        cout<<"\tStudent Score4 = "<<score1<<endl;
        cout<<"\tStudent Score5 = "<<score1<<endl;
        cout<<"\tStudent Total score = "<<total_score<<endl;
        cout<<"\tStudent Average = "<<average<<endl;
        cout<<"\tStudent Grade = "<<grade<<endl;


    
    return 0;
}