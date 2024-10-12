#include <iostream>
#include <windows.h>
#include <string>
#include <iomanip>
using namespace std;

class GerageCar
{
protected:
    int id;
    string color, model, made_in, year, name;
    float price;
    string username = "M", pp = "1";

public:
    void processloading()
    {
        int barwidth = 30;
        for (int i = 0; i < 100; i++)
        {
            cout << "!";
            int pos = barwidth * i / 100;
            for (int j = 0; j <= barwidth; j++)
            {
                if (j < pos)
                {
                    cout << "-";
                }
                else if (j == pos)
                {
                    cout << ">";
                }
                else
                {
                    cout << " ";
                }
            }
            cout << "j" << i << "% \n";
            cout.flush();
            Sleep(30);
        }
    }

    void login()
    {
        string username1, pp1;
        while (true)
        {
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

    void input()
    {
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

    void output() const
    {
        cout << "output id      :" << id << endl;
        cout << "output name    :" << name << endl;
        cout << "output Made in :" << made_in << endl;
        cout << "output year    :" << year << endl;
        cout << "output model   :" << model << endl;
        cout << "output price   : $" << price << endl;
    }

    int getid() const
    {
        return id;
    }

    void menu() const
    {
        cout << "\t---------------   ---------------   ---------------   ---------------   ---------------" << endl;
        cout << "\t| 1.  Input   |   | 2.  List   |   | 3.  Search  |   | 4.  Update  |   | 5.  Exit   |" << endl;
        cout << "\t---------------   ---------------   ---------------   ---------------   ---------------" << endl;
    }
};

class Car : public GerageCar
{
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

class Motobike : public GerageCar
{
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

class PassApp : public GerageCar
{
public:
    void inputPassApp()
    {
        input();
    }
    void outputPassApp()
    {
        output();
    }
};

int main()
{
    int carConst = 0, motoConst = 0, passAppConst = 0;
    int op, op_Car, op_Moto, op_PassApp;
    int id_search;
    bool inFound = false;
    Car car[100];
    Motobike motobikes[100];
    PassApp passapps[100];
    system("cls");
    system("color A");
    car->login();
    system("cls");
    cout << fixed << showpoint << setprecision(2);
    do
    {
        cout << setw(70) << "============>> Car gerage <<===============" << endl;
        cout << "\t---------------   ---------------   ---------------   ---------------" << endl;
        cout << "\t| 1.  Car     |   | 2.  Motobike|    |  3.PassApp |   |  4.  Exit   |" << endl;
        cout << "\t---------------   ---------------   ---------------   ---------------  " << endl;
        cout << "\t choose your option ";
        cin >> op;
        system("cls");
        switch (op)
        {
        case 1:
            cout << setw(70) << "================== car system ===================" << endl;
            car->menu();
            cout << "\t choose your option :";
            cin >> op_Car;
            switch (op_Car)
            {
            case 1:
                system("cls");
                cout << "How many cars do you want to input:";
                cin >> carConst;
                for (int i = 0; i < carConst; i++)
                {
                    cout << "car no " << i + 1 << endl;
                    car[i].inputcar();
                }
                break;
            case 2:
                system("cls");
                for (int i = 0; i < carConst; i++)
                {
                    cout << "car no " << i + 1 << endl;
                    car[i].outputcar();
                }
                break;
            case 3:
                system("cls");
                cout << "Enter id to search: ";
                cin >> id_search;
                inFound = false;
                for (int i = 0; i < carConst; i++)
                {
                    if (id_search == car[i].getid())
                    {
                        system("cls");
                        cout << "Car No " << i + 1 << endl;
                        car[i].outputcar();
                        inFound = true;
                        break;
                    }
                }
                if (!inFound)
                {
                    cout << "No car with id " << id_search << " found" << endl;
                }
                break;
            case 4:
                system("cls");
                cout << "Enter Id to update :";
                cin >> id_search;
                inFound = false;
                for (int i = 0; i < carConst; i++)
                {
                    if (id_search == car[i].getid())
                    {
                        system("cls");
                        cout << "Updating Car No " << i + 1 << endl;
                        car[i].inputcar();
                        inFound = true;
                        break;
                    }
                }
                if (!inFound)
                {
                    cout << "No car with id " << id_search << " found to update" << endl;
                }
                break;
            case 5:
                cout << "Exiting Car system." << endl;
                break;
            default:
                cout << "Invalid option!" << endl;
                break;
            }
            break;
        case 4:
            cout << "Exiting program." << endl;
            return 0;
        default:
            cout << "Invalid option!" << endl;
            break;
        }
    } while (true);

    return 0;
}