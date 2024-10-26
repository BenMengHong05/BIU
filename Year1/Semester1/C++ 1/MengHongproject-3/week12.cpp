#include<iostream>
using namespace std;
int main(){
int number =0;
int sum=0;
do{
    sum=sum+number;
    cout<<"Enter a number:";
    cin>>number;
}
while(number>=0);
cout<<"\nThe sum in "<<sum<<endl;
    return 0;
}
