/*#include<iostream>
using namespace std;
struct your {
    int id;
    string firstname;
    string lastname;
    char gender;
    float score;
    double gpa;

};
int main(){
    your newyour;
    newyour.id=82;
    newyour.firstname="Meng";
    newyour.lastname="Hong";
    newyour.gender='M';
    newyour.score=80;
    newyour.gpa=7.00;


    cout<<"\tYOUR ID : "<<newyour.id<<endl;
    cout<<"\tYOUR NAME :"<<newyour.firstname<<"  "<<newyour.lastname<<endl;
    cout<<"\tYOUR GRADER :"<<newyour.gender<<endl;
    cout<<"\tYOUR SCORE :"<<newyour.score<<endl;
    cout<<"\tYOUR GPA :"<<newyour.gpa<<endl;

    return 0;
}*/


/*--------------------------------2--------------------------------*/
/*#include<iostream>
#include<iomanip>
using namespace std;

struct arrayyour{
    int n,i;
    int id[15];
    string name[15];
    char gender[15];
    int age[15];
    string contact[15];
    float salas[15];
    void input(){
        cout<<"\t========================>> input array information<<==========================\n";
        cout<<"\thow may array do you want to input : ";
        cin>>n;
        for(i=0;i<n;i++){
            cout<<"\t Enter Emlployee ID :";
            cin>>id[i];
            cout<<"\tEnter Emlployee Name :";
            cin>>name[i];
            cout<<"\tEnter Emlployee gender :";
            cin>>gender[i];
            cout<<"\tEnter Emlployee age :";
            cin>>age[i];
            cout<<"\tEnter Emlployee contact :";
            cin>>contact[i];
            cout<<"\tEnter Emlployee salas :";
            cin>>salas[i];
        }
    }
    void output(){
    cout<<"\t===================================>> output employee <<=====================================\n";
    cout<<"\tEmlployee_ID  Emlployee_Name  Emlployee_gender  Emlployee_age  Emlployee_contact  Emlployee_salas \n";
    for(i=0;i<n;i++){
        cout<<"\t"<<setw(7)<<id[i] <<setw(19)<<name[i]<<setw(14)<<gender[i]<<setw(16)<<age[i]<<setw(20)<<contact[i]<<setw(15)<<salas[i];
    }
};
};


int main(){
    arrayyour emp;
    emp.input();
    emp.output();

    return 0;
}*/
/*=======================================================================*/
#include<iostream>
#include<iomanip>
using namespace std;
struct arraye{
    int x,y;
    string name[82];
    int code[82];
    string color[82];
    int capacity[82];
    string model[82];
    int year[82];
    string madel[82];
    double price[82];


    void mei(){
        cout<<"\t=======================================>>Hello Welcome in system<<===============================\n";
        cout<<"\tEnter how many optiong :";
        cin>>x;
        for(y=0;y<x;y++){
            cout<<"\tEnter phone name :";
            cin>>name[y];
            cout<<"\tEnter phone code :";
            cin>>code[y];
            cout<<"\tEnter phone color :";
            
            cin>>color[y];
            cout<<"\tEnter phone capacity :";
            cin>>capacity[y];
            cout<<"\tEnter phone model :";
            cin>>model[y];
            cout<<"\tEnter phone year :";
            cin>>year[y];
            cout<<"\tEnter phone madel :";
            cin>>madel[y];
            cout<<"\tEnter phone price :";
            cin>>price[y];            
        }
    }
     void your(){
        cout<<"\t==============================================>>input for your<<======================================\n";
        cout<<"\tphone_name   phone_code   phone_color  phone_capacity  phone_model  phone_year  phone_madel  phone_price \n ";
        for(y=0;y<x;y++){
            cout<<"\t"<<setw(8)<<name[y]<<setw(11)<<code[y]<<setw(14)<<color[y]<<setw(13)<<capacity[y]<<setw(20)<<model[y]<<setw(10)<<year[y]<<setw(13)<<madel[y]<<setw(11)<<price[y];
        }
    }
};




int main(){
    arraye me;
    me.mei();
    me.your();





    return 0;
}