#include<iostream>
using namespace std;
int main(){
    string name , password;
    cout<<"\t=====================>> Hello Wellcome In My Class 403 <<=========================="<<endl;
    cout<<"\tEnter your name :";
    cin>>name;
    cout<<"\tEnter your password :";
    cin>>password;
    system("cls");
    if(name == "MengHong" && password == "MengHong007" ){
        cout<<"\t==================>> wellcome in class <<========================";
        
    }else{
        cout<<"\t================>>Try again <<===============";
    }
    



   return 0; 
}