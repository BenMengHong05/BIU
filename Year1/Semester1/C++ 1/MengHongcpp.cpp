#include<iostream>
using namespace std;
int main(){
    cout<<"\t text 30 + 30 = "<<30+30<<endl;
    cout<<"\t text 30 - 10 = "<<30-10<<endl;
    cout<<"\t text 40 * 2  = "<<40*2<<endl;
    cout<<"\t text 50 % 3  = "<<50%3<<endl;
    cout<<"\t text 60 / 3  = "<<60/3<<endl;
    cout<<"\t text 30 -10 * 2 / 2 = "<<30-10*2/2<<endl;
    cout<<"\t text (30 + 20 - 10 / 2) * (30 + 50 / 4 -10 ) = "<<(30+20-10/2)*(30+50/4-10)<<endl;

    int A=20;
    int B=50;

    A++;
    cout<<"\ttext A++ = "<<A<<endl;
    B++;
    cout<<"\ttext B++ = "<<B<<endl;

    A+=5;
    cout<<"\ttext A+ = "<<A<<endl;
    B+=8;
    cout<<"\ttext B++ = "<<B;

    


    return 0;
}