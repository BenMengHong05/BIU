 /*#include<iostream>
using namespace std;
 int main(){

 int menghong[5] = {15,25,35,45,55};
 int sum = 0;
 for(int i=0 ; i<5 ; i++){
     cout<<menghong[i]<<endl;
      sum = menghong[i]  *5;
 }
 cout<<"\tvalue sum "<<sum<<endl;
    return 0;
 }*/

/*#include<iostream>
using namespace std;
int main(){
    int number [5][2] ={{10,20},
    {30,40},
    {50,60},
    {70,80},
     {90,100}};
    for(int i=0 ; i<5; i++ ){
        for(int x=0; x<2; x++){
            cout<<" number ["<<i<<"]["<<x<<"]="<<number[i][x]<<endl;
        };
    };

return 0;
}*/

 #include <iostream>
 #include <string>
 #include <iomanip>
 using namespace std;
 bool isfound;
 int op_search, id_search,op_update,id_update,name_update,qty_update,id_tmp;
 int n, i;
 int id[100];
 string name[100];
 float price[100];
 int qty[100];
 std::string name_search;
 string username,password;
 void menu(){

     cout<<"\t===============================>> Hello Wellocome <<=================================\n";
     cout<<"\t=========>>1.insert product";
     cout<<"\t=========>>2.display product";;
     cout<<"\t=========>>3.search producr";
     cout<<"\t=========>>4.update product";
     cout<<"\t=========>>5.Delete product";
     cout<<"\t=========>>6.Exit";
 }
 void insert(){
     cout<<"\t================================>>Hello Wellcome shop<<===============================\n";
     cout<<"\tHow many product do you want to input : ";
     cin>>n;
     for(i= 0; i<n ;i++){
         cout<<"\tNo = "<< i + 1<<endl;
         cout<<"\tEnter Id :";
         cin>>id[i];
         cout<<"\tEnter Name : ";
         cin>>name[i];
         cout<<"\tEnter price :";
         cin>>price[i];
         cout<<"\tEnter qty :";
         cin>>qty[i];
     }
 }
 void display(){
     cout<<"\t===============================>> Display product<<=====================================\n";
     for(i=0 ; i<n ;i++){
         cout<<"\tNo = "<<i + 1<<endl;
         cout<<"\tEnter id :"<<id[i]<<endl;
         cout<<"\tEnter name :"<<name[i]<<endl;
         cout<<"\tEnter price :"<<price[i]<<endl;
         cout<<"\tEnter qty :"<<qty[i]<<endl;
     }
 }
 void search(){
     search:
     cout<<"\t=============================>>search<<=========================="<<endl;
     isfound=0;
     cout<<"\t=========>>1.search by id :"<<endl;
     cout<<"\t=========>>2.search by name :"<<endl;
     cout<<"\tpleaser Choose Option :";
     cin>>op_search;
     switch(op_search){
         case 1:
         search1:
         isfound = 0;
         cout<<"\tEnter search :";
         cin>>id_search;
         for(i=0 ; i<n ;i++){
             if(id_search ==id[i]){
                 cout<<"\tEnter id :"<<id[i]<<endl;
                 cout<<"\tEnter name :"<<name[i]<<endl;
                 cout<<"\tEnter price :"<<price[i]<<endl;
                 cout<<"\tEnter qty :"<<qty[i]<<endl;
                 isfound =1;
                 break;
                 if(isfound ==0){
                     cout<<"\tsearch to found!!\n";
                     goto search1;
                 }
             }
         }
          case 2:
                 search2:
                 cout<<"\tEnter name to search:";
                 cin>>name_search;
                 isfound=0;
                 for(i=0;i<n;i++){
                     if(name_search==name[i]){
                         cout<<"\tEnter id:"<<id[i]<<endl;
                         cout<<"\tEnter name:"<<name[i]<<endl;
                         cout<<"\tEnter price"<<price[i]<<endl;
                         cout<<"\tEnter quantity"<<qty[i]<<endl;
                         isfound=1;
                         break;
                        if(isfound==0){
                         cout<<"\tsearch not found!!\n";
                         goto search2;
                     }
                 }     
             }
             break;
             default:
             cout<<"\tchoose wrong option\n";
             goto search2;
                 break;
             }  
     }

     void update(){
        cout<<"\t================================>>update Product<<==============================\n";
        cout<<"\t========>>1.update Id\n";
        cout<<"\t========>>2.update Name\n";
        cout<<"\t========>>3.update price\n";
        cout<<"\t========>>4.update qty\n";
        cout<<"\t========>>5.update all\n";
        cout<<"\t========>>choose the option :";
        cin>>op_update;

        switch(op_update){
             update:
             
           
            case 1:
                id_update:
                cout<<"\tEnter the Id update\n";
                cin>>id_update;
                isfound =0;
                for(i=0;i<n;i++){
                    if(id_update ==id[i]){
                        cout<<"\tNo = "<<i+1<<endl;
                        cout<<"\tproduct id="<<id[i]<<endl;
                        cout<<"\tEnter new Id:"<<endl;
                        cin>>id[i];
                        isfound=1;
                        break;  
                    }
                }if(isfound==0){
                    cout<<"\tId update not found!\n";
                    goto id_update;
                }
                break;
                case 2:
                name_update:
                cout<<"\tEnter the name update\n";
                cin>>id_update;
                isfound =0;
                for(i=0;i<n;i++){
                    if(id_update ==id[i]){
                        cout<<"\tNo = "<<i+1<<endl;
                        cout<<"\tproduct name="<<name[i]<<endl;
                        cout<<"\tEnter new name:"<<endl;
                        cin>>name[i];
                        isfound=1;
                        break;  
                    }
                }if(isfound==0){
                    cout<<"\tname update not found!\n";
                    goto name_update;
                }
                    break;
            case 3:
                price_update:
                cout<<"\tEnter the name update\n";
                cin>>id_update;
                isfound =0;
                for(i=0;i<n;i++){
                    if(id_update ==id[i]){
                        cout<<"\tNo = "<<i+1<<endl;
                        cout<<"\tproduct price="<<price[i]<<endl;
                        cout<<"\tEnter new price:"<<endl;
                        cin>>price[i];
                        isfound=1;
                        break;  
                    }
                }if(isfound==0){
                    cout<<"\tprice update not found!\n";
                    goto price_update;
                }


                        break;
            case 4:
                qty_update:
                cout<<"\tEnter the qty update\n";
                cin>>id_update;
                isfound =0;
                for(i=0;i<n;i++){
                    if(id_update ==id[i]){
                        cout<<"\tNo = "<<i+1<<endl;
                        cout<<"\tproduct qty="<<qty[i]<<endl;
                        cout<<"\tEnter new qty update:"<<endl;
                        cin>>qty[i];
                        isfound=1;
                        break;  
                    }
                }if(isfound==0){
                    cout<<"\tqty update not found!\n";
                    goto qty_update;
                }

                break;
                /*case 5:
                all_update:
                cout<<"\tEnter the all update\n";
                cin>>id_update;
                isfound =0;
                for(i=0;i<n;i++){
                    if(id_update ==id[i]){
                        cout<<"\tNo = "<<i+1<<endl;
                        cout<<"\tproduct id="<<id[i]<<endl;
                        cout<<"\tproduct name="<<name[i]<<endl;
                        cout<<"\tproduct price="<<price[i]<<endl;
                        cout<<"\tproduct qty="<<qty[i]<<endl;
                        isfound=1;
                        break;  

                        cout<<"\tNew No ="<<i+1<<endl;
                        cout<<"\tEnter new Id :\n";
                        cin>>id[i];
                        cout<<"\tEnter new Name :\n";
                        cin>>name[i];
                        cout<<"\tEnter new price:\n";
                        cin>>price[i];
                        cout<<"\tEnter new qty:\n";
                        cin>>qty[i];

                    }
                }if(isfound==0){
                    cout<<"\tqty update not found!\n";
                    goto all_update;
                }
                
                    break;
                default:
                cout<<"\twrong option\n";
                goto update;*/
        }
     }
     void Delete(){
        Delete:
        cout<<"\t===============================>>Delete Product<<===============================\n";
        cout<<"\t Enter the Delete\n";
        cin>>id_tmp;
        isfound==0;
        for(i=0;i<n;i++){
            if(id_tmp == id[i]){
                for(int k =i ; k<n;k++){
                    id[k] = id[k+1];
                    name[k] = name[k+1];
                    price[k] = price[k+1];
                    qty[k] = qty[k+1];

                }
                if(isfound==0){
                    cout<<"\twrong the option";
                    goto Delete;

                }else{
                    cout<<"\tDelete your to complete";
                }
            }
        }
     }
     void login(){
        login:
        cout<<"\t=================================>>Hello Wellcome in cpp<<=========================\n";
        cout<<"\tEnter the username :";
        cin>>username;
        cout<<"\tEnter the password :";
        cin>>password;
        if(username == "MengHong" || password == "007"){
            cout<<"\tHello Wellcome car\n";
        }else{
            cout<<"\twrong the option\n";
            goto login;
        }
     }
 int main(){
     login();
     menu();
     insert();
     search();
     update();
     Delete();
     display();
     return 0;
 }
