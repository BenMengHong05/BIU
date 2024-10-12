#include <iostream>
#include <windows.h>
#include <string>
#include <iomanip>
using namespace std;
class GerageCar
{
protected:
    int id;
    string color,model,made_in,year,name;
    float price;
    string username = "M", pp = "1";

public:
    void processloading(){
        int barwidth = 30;
        for (int i = 0; i < 100; i++){
            cout << "!";
            int pos = barwidth * i / 100;
            for (int j = 0; j <= barwidth; j++){
                if (j < pos){
                    cout << "-";
                }
                else if (j == pos){
                    cout << ">";
                }
                else{
                    cout << " ";
                }
            }
            cout << "j" << i << "% \n";//Ben MengHong
            cout.flush();
            Sleep(30);
        }
    }
    void login(){
        string username1, pp1;
        while (true){
            cout << setw(70) << "================================= Login Program =================================" << endl;
            cout << "Username :";
            cin >> username1;
            cout << "Password :";
            cin >> pp1;
            cout << endl;
            processloading();
            system("cls");
            if (username1 == username && pp1 == pp)
            {
                cout << "Login successful" << endl;
                break;
            }
            else
            {
                system("color 4");
                cout << "wrong username or password " << endl;
                system("pause");
                system("cls");
                system("color A");
            }
        }
    }
    void input(){
        cout << "Enter id       :";
        cin >> id;
        cout << "Enter Name     :";
        cin >> name;
        cout << "Enter Made in  :";
        cin >> made_in;
        cout << "Enter Year     :";
        cin >> year;
        cout << "Enter Color    :";
        cin >> color;
        cout << "Enter Model    :";
        cin >> model;
        cout << "Enter price    : $";
        cin >> price;
    }
    void output() const{                                                                               //Ben MengHong
        cout << "output id      :" << id;
        cout << "output name    :" << name;
        cout << "output Made in :" << made_in;
        cout << "output year    :" << year;
        cout << "output model   :" << model;
        cout << "output price   : $" << price;}
    int getid() const{
        return id;
    }
    void menu() const{
        cout << "\t---------------   ---------------   ---------------   ---------------   ---------------" << endl;
        cout << "\t| 1.  Input   |   |  2.  List   |   |  2.  List   |   |  2.  List   |   |  2.  List   |" << endl;
        cout << "\t---------------   ---------------   ---------------   ---------------   ---------------" << endl;
    }
};
class Car : public GerageCar{
    public:
        void inputcar()
        {
            input();
        }
        void outputcar()
        {
            output();
        }
};
class Motobike : public GerageCar{
    public:
        void inputMotobike()
        {
            input();
        }
        void outputMotobike()
        {
            output();
        }
};
class PassApp : public GerageCar{
    public:
        void inputPassApp()
        {
            input();
        }
        void outputPassApp()                                                            //Ben MengHong
        {
            output();
        }
};
int main(){
    int carConst = 0, motoConst = 0, passAppConst = 0;
    int op, op_Car, op_Moto, op_PassApp;
    int id_search;
    bool isFound = false;
    Car cars[100];
    Motobike motobikes[100];
    PassApp passapps[100];
    system("cls");
    system("color A");
    cars->login();
    system("cls");
    cout << fixed << showpoint << setprecision(2);
    do{
        cout << setw(70) << "============>> Car gerage <<===============" << endl;
        cout << "\t---------------   ---------------   ---------------   ---------------" << endl;
        cout << "\t| 1.  Car     |   | 2.  Motobike|    |  2.PassApp |   |  2.  Exit   |" << endl;
        cout << "\t---------------   ---------------   ---------------   ---------------  " << endl;
        cout << "\t choose your option ";
        cin >> op;
        system("cls");
        switch (op){
        case 1:
            cout << setw(70) << "================== car system ===================" << endl;
            cars->menu();
            cout << "\t choose your option :";
            cin >> op_Car;
            switch (op_Car){
                case 1:
                    system("cls");
                    cout << "How many cars do you want to input:";
                    cin >> carConst;
                    for (int i = 0; i < carConst; i++){
                        cout << "car no " << i + 1 << endl;
                        cars[i].inputcar();
                    }
                    break;
            case 2:
                system("cls");
                for (int i = 0; i < carConst; i++){
                    cout << "car no " << i + 1 << endl;
                    cars[i].outputcar();
                }
                break;
            case 3:
                system("cls");
                cout << "Enter id to search ";
                cin >> id_search;
                isFound = false;
                for (int i = 0; i < carConst; i++){
                    if (id_search == cars[i].getid())
                    {
                        system("cls");
                        cout << "Car No " << i + 1 << endl;                                          //Ben MengHong
                        cars[i].outputcar();
                        isFound = true;
                        break;
                    }
                }
                if (!isFound){
                    cout << "No car with id " << id_search << "found" << endl;
                }
                break;
            case 4:
                system("cls");
                cout << "Enter Id to update :";
                cin >> id_search;
                isFound = false;
                for (int i = 0; i < carConst; i++){
                    system("cls");
                    cout << "Car no " << i + 1 << endl;
                    cars[i].outputcar();
                    cout << "Will update this information " << endl;
                    system("push");
                    cars[i].inputcar();
                    isFound = true;
                    break;
                }
                if (!isFound){
                    cout << "No car with id " << id_search << "Found " << endl;
                }
                break;
            case 5:
                system("cls");
                cout << "Enter id to Delete";
                cin >> id_search;
                isFound = false;
                for (int i = 0; carConst; i++){
                    if (id_search == cars[i].getid()){
                        system("cls");
                        cout << "Car No " << i + 1 << endl;
                        cars[i].outputcar();
                        for (int j = i; j < carConst - 1; j++)
                        {
                            cars[j] = cars[j + 1];
                        }
                        carConst--;
                        isFound = true;
                        cout << "Car with id " << id_search << "has benn Deleted" << endl;                      
                        break;
                    }
                }
                if (!isFound){
                    cout << "No car with id " << id_search << "Found " << endl;
                }
                break;

            default:
                system("color 4");
                cout << "You chose the wrong option " << endl;
                system("pause");
                system("cls");
                system("color A");
                break;
            }
            break;
        case 2:
            system("cls");
            cout << setw(70) << "================ >> motobike <<=======================";                        //Ben MengHong
            motobikes->menu();
            cout << "\tchoose your option :";
            cin >> op_Moto;
            system("cls");
            switch (op_Moto){
            case 1:
                system("cls");
                cout << "How many motobike do you want to input:";
                cin >> motoConst;
                for (int i = 0; i < motoConst; i++){
                    cout << "motobike No " << i + 1 << endl;
                    motobikes[i].inputMotobike();
                }
                break;
            case 2:

                system("cls");
                for (int i = 0; i < motoConst; i++){
                    cout << "Motobike No " << i + 1 << endl;
                    motobikes[i].outputMotobike();
                }
                break;
            case 3:
                system("cls");
                cout << "Enter id to search :";
                cin >> id_search;
                isFound = false;
                for (int i = 0; i < motoConst; i++){
                    if (id_search == motobikes[i].getid()){
                        system("cls");
                        cout << "Motobike No " << i + 1 << endl;
                        motobikes[i].outputMotobike();
                        isFound = true;
                        break;
                    }
                }
                if (!isFound){
                    cout << "No Motobike with id" << id_search << "Found" << endl;                                          // Ben MengHong
                }
                break;
            case 4:
                system("cls");
                cout << "Enter id to update :";
                cin >> id_search;
                isFound = false;
                for (int i = 0; i < motoConst; i++){
                    if (id_search == motobikes[i].getid()){
                        system("cls");
                        cout << "Motobike No " << i + 1 << endl;
                        motobikes[i].outputMotobike();
                        cout << "Will update this information " << endl;
                        system("pasue");
                        system("cls");
                        motobikes[i].inputMotobike();
                        isFound = true;
                        break;
                    }
                }
                if (!isFound){
                    cout << "No Motobike with id " << id_search << "found" << endl;
                }
                break;
            case 5:
                system("cls");
                cout << "Enter id to delete:";
                cin >> id_search;
                isFound = false;
                for (int i = 0; i < motoConst; i++){
                    if (id_search == motobikes[i].getid()){
                        system("cls");
                        cout << "Motobike No" << i + 1 << endl;
                        motobikes[i].outputMotobike();
                        for (int j = i; j < motoConst - 1; j++)
                        {
                            motobikes[j] = motobikes[j + 1];
                        }
                        motoConst--;
                        isFound = true;
                        cout << "Motobike with id " << id_search << "delete " << endl;
                        break;
                    }
                }
                if (!isFound){
                    cout << "No motobike with id" << id_search << "Found" << endl;                              //Ben MengHong
                }
                break;
            default:
                system("cls");
                cout << "You choose the wrong option :" << endl;
                system("pause");
                system("cls");
                system("color A");
                break;
            }
            break;
        case 3:
            system("cls");
            cout << "============================== PassApp ===========================" << endl;
            passapps->menu();
            cout << "\t choosee your option :";
            cin >> op_PassApp;
            system("cls");
            switch (op_PassApp){
            case 1:
                system("cls");
                cout << "How many PassApp wehicles do you want to input :";
                cin >> passAppConst;
                for (int i = 0; i < passAppConst; i++){
                    cout << "PassApp No " << i + 1 << endl;
                    passapps[i].inputPassApp();
                }
                break;
            case 2:
                system("cls");
                for (int i = 0; i < passAppConst; i++){
                    cout << "PassApp No" << i + 1 << endl;
                    passapps[i].outputPassApp();
                }
                break;
            case 3:
                system("cls");
                cout << "Enter id to search:";
                cin >> id_search;
                isFound = false;
                for (int i = 0; i < passAppConst; i++){
                    if (id_search == passapps[i].getid()){
                        system("cls");
                        cout << "PassApp No" << i + 1 << endl;
                        passapps[i].outputPassApp();
                        isFound = true;
                        break;
                    }
                    if (!isFound){
                        cout << "No PassApp vehicle id " << id_search << "found" << endl;                               //Ben MengHong
                    }
                    break;
                case 4:
                    system("cls");
                    cout << "Enter id to update :";
                    cin >> id_search;
                    isFound = false;
                    for (int i = 0; i < passAppConst; i++){
                        if (id_search == passapps[i].getid()){
                            system("cls");
                            cout << "PassApp No" << i + 1 << endl;
                            passapps[i].outputPassApp();
                            cout << "Will update this informatino " << endl;
                            system("cls");
                            passapps[i].inputPassApp();
                            isFound = true;
                            break;
                        }
                    }
                    if (!isFound){
                        cout << "No PassApp vehicle with id " << id_search << "found " << endl;
                    }
                case 5:
                    system("cls");
                    cout << "Enter id to delete:";
                    cin >> id_search;
                    isFound = false;
                    for (int i = 0; i < passAppConst; i++){
                        if (id_search == passapps[i].getid()){
                            system("cls");
                            cout << "PassApp No " << i + 1 << endl;
                            passapps[i].outputPassApp();
                            for (int j = i; j < passAppConst - 1; j++)
                            {
                                passapps[j] = passapps[j + 1];
                            }
                            passAppConst--;
                            isFound = true;
                            cout << "PassApp vehicle with id " << id_search << "has benn deleted." << endl;
                            break;
                        }
                    }
                    if (!isFound){
                        cout << "No passApp vehicle with id" << id_search << "found >" << endl;           //Ben MengHong
                    }
                    break;
                default:
                    system("color 4");
                    cout << "You choose the wrong option.\n";
                    system("pause");
                    system("cls");
                    system("color A");
                    break;
                }
            }
        }
    } while (op != 4);
    return 0;
}