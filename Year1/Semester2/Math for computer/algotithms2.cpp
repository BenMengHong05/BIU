#include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;
int main(){
    restart:
    float a,b,c,delta,x1,x2,x;
    cout<<"Input a :";
    cin>>a;
    cout<<"Input b :";
    cin>>b;
    cout<<"Input c :";
    cin>>c;
    if(a==0){
        x=-c/b;
        cout<<"Result x = "<<x;
    }
    if(a!=0){
        delta=b*b-4*a*c;
        if(delta<0){
            cout<<" No Root";
        }
        if(delta==0){
            x1 = -b/(2*a);
            cout<<"Result x1 ="<<x1;
        }
        if(delta>0){
            x1=(-b+sqrt(delta))/(2*a);
            x2=(-b-sqrt(delta))/(2*a);
            cout<<"Result x1 ="<<x1<<endl;
            cout<<"Result x2 ="<<x2;
        }
    }
    cout<<"\n Input again .";
    goto restart;
    return 0;
}