#include <iostream>
#include <conio.h>
using namespace std;
class phone
{
protected:
    string model;
    int capacity;
    string color;
    float price;
    string made_in;
    int warranty;
public:
    void setPrice(float price){
        this -> price = price;
    }
    float getPrice(){
        return price;
    }
};
class Iphone : public phone
{
public:
    void inputiphone()
    {
        cout << "\t===>>> PHONE <<<===\n";
        cout << "\tModel = ";
        cin >> model;
        cout << "\tCapacity = ";
        cin >> capacity;
        cout << "\tColor = ";
        cin >> color;
        cout << "\tPrice = ";
        cin >> price;
        cout << "\tMade in = ";
        cin >> made_in;
    }
    void outputiphone() {
         cout << "\t===>>> PHONE <<<===\n";
        cout << "\tModel = "<< model<<endl;
        cout << "\tCapacity = "<< capacity<<endl;
        cout << "\tColor = "<< color<<endl;
        cout << "\tPrice = "<< price<<"$" <<endl;
        cout<<"\tPrice in khmer="<<price*4100<<"Riel"<<endl;
        cout << "\tMade in = "<< made_in<<endl;
    }
};
class Oppo: public Iphone{
    private:
    int warranty;
    public:
    void inputoppo(){
        inputiphone();
        cout<<"\tEnter Warranty=";
        cin>>warranty;
    }
    void outputoppo(){
        outputiphone();
        cout<<"\tWarranty="<<warranty<<endl;
    }
};
class Sammung: public Oppo{
    private:
    string sale_dat;
    public:
     void inputsammung(){
        inputoppo();
        cout<<"\tEnter sale_dat=";
        cin>>sale_dat;
    }
    void outputsammung(){
        outputoppo();
        cout<<"\tsale_dat="<<sale_dat<<endl;
    }
};
int main(){
    int op,n,i;
    char end;
    float total=0.0;
   Sammung obj[100];
   do{
    system("cls");
     cout << "\t1. iPhone\n";
       cout << "\t2. Oppo\n";
       cout << "\t3. Samsung\n";
       cout << "\tChoose the option: ";
       cin >> op;
       switch(op){
        case 1:
        system("cls");
        cout<<"\t===>>Insert<<===\n";
        cout << "\tHow many products do you want to input: ";
            cin >> n;
            for(i=0;i<n;i++){
                cout<<"\tNO="<<i+1<<endl;
                obj[i].inputiphone();
            }
        getch();
        system("cls");
            cout<<"\t==>>Displaying<<===\n";
            for(i=0;i<n;i++){
                cout<<"\tNO="<<i+1<<endl;
                obj[i].outputiphone();
                total += obj[i].getPrice();
            }
            if (n > 1)
                std::cout << "Total Price: " << total << " $" << std::endl;
        break;
        case 2:
        system("cls");
        cout<<"\t===>>Insert<<===\n";
        cout << "\tHow many products do you want to input: ";
            cin >> n;
            for(i=0;i<n;i++){
                cout<<"\tNO="<<i+1<<endl;
                obj[i].inputoppo();
            }
        getch();
            system("cls");
            cout<<"\t==>>Displaying<<===\n";
            for(i=0;i<n;i++){
                cout<<"\tNO="<<i+1<<endl;
                obj[i].outputoppo();
                total += obj[i].getPrice();
            }
            if (n > 1)
                std::cout << "Total Price: " << total << " $" << std::endl;
        break;
        case 3:
        system("cls");
        cout<<"\t===>>Insert<<===\n";
        cout << "\tHow many products do you want to input: ";
            cin >> n;
            for(i=0;i<n;i++){
                cout<<"\tNO="<<i+1<<endl;
                obj[i].inputsammung();
            }
        getch();
            system("cls");
            cout<<"\t==>>Displaying<<===\n";
            for(i=0;i<n;i++){
                cout<<"\tNO="<<i+1<<endl;
                obj[i].outputsammung();
                total += obj[i].getPrice();
            }
            if (n > 1)
                std::cout << "Total Price: " << total << " $" << std::endl;
        break;
       }
       cout << "Do you want to continue(Y/N): ";
       cin >> end;
       while(getchar() != '\n');
   }while(end != 'N' && end != 'n');
    return 0;
}