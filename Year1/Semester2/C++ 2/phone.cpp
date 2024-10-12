#include <iostream>
#include <vector>
using namespace std;
int id, choose;
string password, username;
string name, model;
int year;
class car
{
public:
int id;

    string name,color;
    int storage;
    float price;
    void inputcar()
    {
        system("cls");
        cout << "Enter Your Name   :";
        cin >> name;
        cout << "Enter Your color  :";
        cin >> color;
        cout << "Enter Your storage   :";
        cin >> storage;
        cout << "Enter Your Price  :" << "$";
        cin >> price;
    }

public:
    void display() const
    {
        system("cls");
        cout<<"Welcome to display"<<endl;
        cout << "Name :" << name << endl;
        cout << "color :" << color << endl;
        cout << "storage :" << storage << endl;
        cout << "Price :" << price << endl;
    }
};
class menucar
{
    vector<car> cars;

public:
    int choose;
    void menu()
    {
        while (true)
        {
            system("cls");
            cout << "Welcome in car Menu" << endl;
            cout << "1.Input Car" << endl;
            cout << "2.display" << endl;
            cout << "3.search Car" << endl;
            cout << "4.Update Car" << endl;
            cout << "5.Delete Car" << endl;
            cout << "6.Exit " << endl;
            cout << "chose the options car :" << endl;
            cin >> choose;
            switch (choose)
            {
            case 1:
            {
                car newCar;
                newCar.inputcar();
                cars.push_back(newCar);
                cout << "" << endl;
                system("push");
            }
            break;
            case 2:
            {
                for (const auto &car : cars)
                {
                    car.display();
                }
                system("pause");
            }
            break;
            case 3:
            {
                search();
            }
            break;
            case 4:
            {
                update();
            }
                break;
            case 5:{
                deletecar();
            }
            default:
                exitcar();
                break;
            }
        }
    };
    void search()
    {
    search:
        string searchname;
        int searchid;
        system("cls");
        cout << "Search Name car:";
        cin >> searchname;
        cout << "Search id car  :";
        cin >> searchid;

        bool found = false;

        for (const auto &car : cars)
        {
            if (car.name == searchname && car.id == searchid)
            {
                car.display(); // Call display on the found car
                found = true;
                break; // Exit the loop after finding the car
            }
        }

        if (!found)
        {
            cout << "Car not found!" << endl;
            
        }
        system("pause");
    };
    void update()
    {
        int id_update;
        cout << "Enter id car to update :";
        cin >> id_update;
        for (auto &car : cars)
        {
            if (car.id == id_update)
            {
                car.inputcar(); // Call inputcar on the found car
                break;          // Exit the loop after updating the car
            }
        }
        cout << "Car updated successfully!" << endl;
        system("pause");
    };
    void deletecar(){
        int id_delete;
        cout << "Enter id car to delete :";
        cin >> id_delete;
        for (auto it = cars.begin(); it!= cars.end(); ++it)
        {
            if (it->id == id_delete)
            {
                cars.erase(it);
                cout << "Car deleted successfully!" << endl;
                break;
            }
        }
        system("pause");
    }
    void exitcar(){
        system("cls");
        cout << "Thank you for using our car Menu!" << endl;
        exit(0);
    }
};
int main()
{
    while (true)
    {
        system("cls");
        cout << "======================================>> Login <<=================================" << endl;
        cout << "Enter your username :";
        cin >> username;
        cout << "Enter your password :";
        cin >> password;
        if (username == "MengHong" && password == "123")
        {
            cout << " Your Login successfully !";
            break;
        }
        else
        {
            cout << "try again !!!!";
            system("pause");
        };
    };
    menucar obj;
    obj.menu();
    return 0;
}