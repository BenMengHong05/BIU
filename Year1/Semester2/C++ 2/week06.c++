/*
#include<iostream>
using namespace std;
class me{
    private:
    int id;
    string name;
    int age;
    char gender;
    char gread;
    bool result;
    public:
    void set(){
        cout<<"\tEnter id:";
        cin>>id;
        cout<<"\tEnter Name:";
        cin>>name;
        cout<<"\tEnter gender:";
        cin>>gender;
        cout<<"\tEnter age:";
        cin>>age;
    }
    void get(){
        cout<<"\tID="<<id<<endl;
        cout<<"\tName="<<name<<endl;
        cout<<"\tGender="<<gender<<endl;
        cout<<"\tAge="<<age<<endl;
    }
};
class your:public me{//derive class
protected:
float score1,score2,score3,score4,score5;
float total,average;
public:
void sets(){
    set();
    cout<<"\tEnter score1:";
    cin>>score1;
    cout<<"\tEnter score2:";
    cin>>score2;
    cout<<"\tEnter score1:";
    cin>>score3;
    cout<<"\tEnter score4:";
    cin>>score4;
    cout<<"\tEnter score5:";
    cin>>score5;
    total = score1+score2+score3+score4+score5;
    average=total/5;
}
void gets(){
    get();
    cout<<"\tTotal Score="<<total<<endl;
    cout<<"\tAverage="<<average<<endl;
}
};
class result:public your{
    public:
    void grade(){
        if(average >= 90 && average <= 100){
            cout << "\tGrade A";
        }else if(average >= 80 && average <90){
            cout << "\tGrade B";
        }else if(average >= 70 && average <80){
            cout << "\tGrade C";
        }else if(average >= 60 && average <70){
            cout << "\tGrade D";
        }else if(average >= 50 && average <60){
            cout << "\tGrade E";
        }else if(average<50 && average >0){
            cout<<"\tGrade F";
        }else {
            cout << "\tWrong Input!\n";
        }
    }
};
int main(){
    system("cls");
    result obj;
    obj.sets();
    obj.gets();
    obj.grade();
    return 0;
}
*/
/*#include<iostream>
using namespace std;
class dispay1{
    public:
    void input(){
        cout<<"\t Hello Word A"<<endl;
    }
};
class dispay2: public dispay1{ // single inheritane
    public:
    void output1(){
        cout<<"\t back B"<<endl;
    }
};

int main(){
   dispay2 obj;
   obj.input();
   obj.output1();
   
    return 0;
}*/

/*#include<iostream>
using namespace std;
class dispay1{
    public:
    void input(){
        cout<<"\t Hello Word A"<<endl;
    }
};
class dispay2: public dispay1{ 
    public:
    void output1(){
        cout<<"\t back B"<<endl;
    }
};
class dispay3: public dispay2{// multi level inheritane
    public:
    void output2(){
        cout<<"\t back c"<<endl;
    }
};

int main(){
   dispay3 obj;
   obj.input();
   obj.output1();
   obj.output2();
   
    return 0;
}
*/
/*
#include<iostream>
using namespace std;
class dispay1{
    public:
    void input(){
        cout<<"\t Hello Word A"<<endl;
    }
};
class dispay2{ 
    public:
    void output1(){
        cout<<"\t back B"<<endl;
    }
};
class dispay3:public dispay1 , public dispay2{// multipler inheritane
    public:
    void output2(){
        cout<<"\t back c"<<endl;
    }
};

int main(){
   dispay3 obj;
   obj.input();
   obj.output1();
   obj.output2();
   
    return 0;
}
*/
/*
#include<iostream>
using namespace std;
class dispay{
    protected:
    int a = 40;
    public:
    void input(){
        cout<<"\t weekA"<<endl;
    }
};
class dispay1:public dispay{
    protected:
    int b = 50;
    public:
    void output1(){
        cout<<"\t WeekB"<<endl;
        cout<<"\t A + B ="<<a+b<<endl;
    }
};
class dispay2:public dispay{
    protected:
    int c = 40;
    public:
    void output2(){
        cout<<"\t weekC "<<endl;
        cout<<"\t B + C ="<<a+c<<endl;
    }
};
class dispay3:public dispay{
    protected:
    int d =100;
    public:
    void output3(){
        cout<<"\t weekD"<<endl;
        cout<<"\t A + D = " <<a+d<<endl;
    }
};
int main(){
    dispay1 obj1;
    obj1.input();
    obj1.output1();

    dispay2 obj2;
    obj2.input();
    obj2.output2();

    dispay3 obj3;
    obj3.input();
    obj3.output3();
    return 0;
}
*/
#include<iostream>
using namespace std;
class dispay{
    protected:
    int a = 40;
    public:
    void input(){
        cout<<"\t weekA"<<endl;
    }
};
class dispay1:public dispay{
    protected:
    int b = 50;
    public:
    void output1(){
        cout<<"\t WeekB"<<endl;
        cout<<"\t a + b ="<<a+b<<endl;
    }
};
class dispay2:public dispay{
    protected:
    int c = 40;
    public:
    void output2(){
        cout<<"\t weekC "<<endl;
        cout<<"\t a + c ="<<a+c<<endl;
    }
};
class dispay3:public dispay1 , public dispay2{
    protected:
    int d =100;
    public:
    void output3(){
        cout<<"\t weekD"<<endl;
        cout<<"\t C * D = " <<c*d<<endl;
    }
};
int main(){

    dispay3 obj3;
    obj3.output1();
    obj3.output2();
    return 0;
}
