/*#include<iostream>
using namespace std;
    // learn class  MH -> nameclass
    class MH{
        public:
        int id;
        string name;
        char gender;
        int age;
        string address;
        string dob;
        string contact;
        private:
    };
int main(){
    // id ber not write public in class id not error
    MH obj;
    obj.id=8270;
    obj.name="MengHong";
    obj.gender='M';
    obj.age=20;
    obj.dob="30/04/2004";
    obj.address="phnom phenh";
    obj.contact="0002492403";
//------------------------------------------------------- input to user ---------------------------------------//
    cout<<"\t MH ID :"<<obj.id<<endl;
    cout<<"\t MH NAME :"<<obj.name<<endl;
    cout<<"\t MH GENDER : "<<obj.gender<<endl;
    cout<<"\t MH AGE :"<<obj.age<<endl;
    cout<<"\t MH DOB :"<<obj.dob<<endl;
    cout<<"\t MH ADDRESS :"<<obj.address<<endl;
    cout<<"\t MH CONTACT :"<<obj.contact<<endl;
    return 0; 
}
*/
#include<iostream>
using namespace std;
class carme{
    private:
    string car_nam;
    string car_model;
    string car_color;
    int car_year;
    float car_price;
    string car_madein;
    string car_option;
    public:
    void carmenghong(){
        cout<<"\t Enter car_name :";
        cin>>car_nam;
        cout<<"\t Enter car_model :";
        cin>>car_model;
        cout<<"\t Enter car_color :";
        cin>>car_color;
        cout<<"\t Enter car_year :";
        cin>>car_year;
        cout<<"\t Enter car_price :";
        cin>>car_price;
        cout<<"\t Enter car_madein :";
        cin>>car_madein;
        cout<<"\t Enter car_optionn :";
        cin>>car_option;
    }
    void dispay(){
        cout<<"\t==============================================>> input user type <<======================================"<<endl;
        cout<<"\t Car Name :"<<car_nam<<endl;
        cout<<"\t Car Model :"<<car_model<<endl;
        cout<<"\t Car Color :"<<car_color<<endl;
        cout<<"\t Car Year :"<<car_year<<endl;
        cout<<"\t Car Price :"<<car_price<<"$"<<endl;
        cout<<"\t Car Madein :"<<car_madein<<endl;
        cout<<"\t Car Optionn :"<<car_option<<endl;
    }
};
int main(){
    carme obj1[100];
    int x,y;
    cout<<"\t do your want car :";
    cin>>x;
    for(y=0;y<x;y++){
        cout<<"\t NO = "<<y+1<<endl;
        obj1[y].carmenghong();
    }
    for(y=0;y<x;y++){
        cout<<"\t NO = "<<y+1<<endl;
        obj1[y].dispay();
    }
    obj1[100].carmenghong();
    obj1[100].dispay();
    return 0;
}