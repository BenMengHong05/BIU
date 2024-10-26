#include <iostream>
#include <string>
using namespace std;

class Login {
    string username, password,color,model;
    int i, n, year;
    string name[50];
    int id[50];
    float price[50];
    int qty[50];
    int op;

public:
    void inputLogin() {
        while (true) {
            system("cls");
            cout << "\t=================================>> Welcome <<=========================\n";
            cout << "\tEnter the username: ";
            cin >> username;
            cout << "\tEnter the password: ";
            cin >> password;

            if (username == "cpp" && password == "123") {
                cout << "===========================>> Welcome <<=========================" << endl;
                break;
            } else {
                cout << "\t please try again.\n";
            }
        }
        system("cls");
    }
    void inputdata(){
        cout<<"\t Enter ID :"<<id;
        cout<<"\t Enter Name :"<<name;
        cout<<"\t Enter color :"<<color;
        cout<<"\t Enter Model :"<<model;
        cout<<"\t Enter year :"<<year;
        

    }

    void menu() {
        cout << "=====================================>> Welcome to Product Menu <<===============================\n";
        cout << "\t1. Motorbike" << endl;
        cout << "\t2. Car" << endl;
        cout << "\t3. PassApp" << endl;
        cout << "\t4. Exit" << endl;
        cout << "Choose the option: ";
        cin >> op;

        switch (op) {
            case 1:
                system("cls");
                cout << "\t===============>>Motorbike <<===================";
                for (int i = 0; i < n; i++) {
                    cout<<"\t Enter ID :"<<id;
                    cout<<"\t Enter Name :"<<name;
                    cout<<"\t Enter color :"<<color;
                    cout<<"\t Enter Model :"<<model;
                    cout<<"\t Enter year :"<<year;
                }
                break;
            case 2:
                system("cls");
                cout << "\t===============>> Car <<===================";
                for (int i = 0; i < n; i++) {
                    cout<<"\t Enter ID :"<<id;
                    cout<<"\t Enter Name :"<<name;
                    cout<<"\t Enter color :"<<color;
                    cout<<"\t Enter Model :"<<model;
                    cout<<"\t Enter year :"<<year;
                }
                break;

            case 3:
                system("cls");
                cout << "\t===============>> PassApp <<===================";
                for (int i = 0; i < n; i++) {
                    cout<<"\t Enter ID :"<<id;
                    cout<<"\t Enter Name :"<<name;
                    cout<<"\t Enter color :"<<color;
                    cout<<"\t Enter Model :"<<model;
                    cout<<"\t Enter year :"<<year;
                }
                break;

            case 4:
                cout << "Exiting the program.\n";
                break;

            default:
                cout << "Invalid option, please try again.\n";
                break;
        }
    }
};

int main() {
    Login obj;
    obj.inputLogin();
    obj.menu();
    return 0;
}