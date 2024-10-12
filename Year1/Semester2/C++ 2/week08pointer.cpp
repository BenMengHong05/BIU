#include<iostream>
using namespace std;
int main(){
    /*int  *id;// pointer
    int * id;// pointer
    int*  id;// pointer
    */
   int *id;
   int ptr=82;
   // & and *
   id=&ptr;
   cout<<"\t value of ptr :"<<ptr<<endl;
   cout<<"\t value of ptr :"<<*id<<endl;
   cout<<"\t value of ptr :"<<id<<endl;
   cout<<"\t value of ptr :"<<&ptr<<endl;
   
    return 0;
}