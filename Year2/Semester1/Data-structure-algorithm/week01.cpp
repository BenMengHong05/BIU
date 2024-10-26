#include<iostream>
#include<cmath>
using namespace std;
int main(){
    float  a,b,c,delta,x1,x2;
    cout<<"Input Data A :";
    cin>>a;
    cout<<"Input Data B :";
    cin>>b;
    cout<<"Input Data C :";
    cin>>c;
    if(a == 0){
        x1=x2=  -c/b;
         cout<<"x1 = x2 = "<<x1<<endl;
    }
    if(a > 0){
        delta = (b*b)-4*a*c;

        x1 = (-b+ sqrt(delta))/2*a;
        x2 = (-b-sqrt(delta))/2*a;
        cout<<"X1 :"<<x1<<endl;
        cout<<"X2 :"<<x2<<endl;
    }
    if(a < 0){
        cout<<"Not found "<<endl;
    }

}