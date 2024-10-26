/*#include<iostream>
using namespace std;
struct studentype{
    int id;
    string name;
    int age;
    char gender;
    char grade;
    float score1,score2,score3,score4,score5;
    float total = score1 + score2 + score3 + score4 + score5;
    float average = total/5;
};
int main(){
    studentype Me;
    studentype *you = &Me;
    system("cls");
    cout<<"========================================>> input <<================================="<<endl;
    cout<<"value is ID :";
    cin>>you->id; // ponit this( -> )
    cout<<"value is Name :";
    cin>>you->name;
    cout<<"value is Age :";
    cin>>you->age;
    cout<<"value is Geder :";
    cin>>you->gender;
    cout<<"value is score 1 :";
    cin>>you->score1;
    cout<<"value is score 2 :";
    cin>>you->score2;
    cout<<"value is score 3 :";
    cin>>you->score3;
    cout<<"value is score 4 :";
    cin>>you->score4;
    cout<<"value is score 5 :";
    cin>>you->score5;

    you->total = you->score1 + you->score2+ you->score3+you->score4+you->score5;
    you->average = you->total/5;

    if(you->average <=100 && you->average >=90){
        you->grade= 'A';
    }else if(you->average <=90 && you->average >=80){
        you->grade='B';
    }else if(you->average <=80 && you->average >=70){
        you->grade='C';
    }else if(you->average <=70 && you->average >=60){
        you->gender='D';
    }else if(you->average <=60 && you->average >=50){
        you->gender='E';
    }else{
        you->grade='F';
    }
    cout<<"=========================>> output <<==================================="<<endl;
    cout<<"Result Id : "<<you->id<<endl;
    cout<<"Result Name : "<<you->name<<endl;
    cout<<"Result Age : "<<you->age<<endl;
    cout<<"Result Gender : "<<you->gender<<endl;
    cout<<"Result total : "<<you->total<<endl;
    cout<<"Result average : "<<you->average<<endl;
    cout<<"gred is :"<<you->grade<<endl;
    cout<<"=========================>> output addreess <<==================================="<<endl;
    cout<<"Result address Id : "<<&(*you).id<<endl;
    cout<<"Result address name : "<<&(*you).name<<endl;
    cout<<"Result address age : "<<&(*you).age<<endl;
    cout<<"Result address geder : "<<&(*you).gender<<endl;
    cout<<"Result address total : "<<&(*you).total<<endl;
    cout<<"Result address average : "<<&(*you).average<<endl;
    cout<<"Result address grede : "<<&(*you).grade<<endl;
    return 0;
}
*/
#include<iostream>
using namespace std;
int main(){
    return 0;
}