#include <iostream>
#include<conio.h>
using namespace std;
int main()
{
    start:

    float a, b, c, max, min;
    cout << "Input A :";
    cin >> a;
    cout << "input B :";
    cin >> b;
    cout << "input C :";
    cin >> c;
    if (a == b && a == c)
    {
        cout << "not maximum and minimum" << endl;
    }
    if (a != b && a != c && b != c)
    {
        if (a > b)
        {
            if (a > c)
            {
                max = a;
                if (b > c)
                {
                    min = c;
                }
                if (c > b)
                {
                    min = b;
                }
                cout << "Maximun :" << max << endl;
                cout << "Minimum :" << min << endl;
            }
            if (a < c)
            {
                max = c;
                min = b;
                cout << "Maximun :" << max << endl;
                cout << "Minimum :" << min << endl;
            }
        }
        if(a < b){
            if(b>c){
                max=b;
                if(a>c){
                    min=c;
                }
                if(a<c){
                    min=a;
                }
                cout<<"Maximun :" << max << endl;
                cout<<"Minimum :" << min << endl;
            }
            if(b<c){
                max = c;
                min = a;
                cout<<"Maximun :" << max << endl;
                cout<<"Minimum :" << min << endl;

            }
        }
    }
        if(a==b&&a!=c){
            if(a>c){
                max=a;
                min=c;
                cout<<"Maximun :" << max << endl;
                cout<<"Minimum :" << min << endl;
            }
            if(a<c){
                max=c;
                min=a;
                cout<<"Maximun :" << max << endl;
                cout<<"Minimum :" << min << endl;
            }
        }
        if(a==c&&a!=b){
            if(a>b){
                max=a;
                min=b;
                cout<<"Maximun :" << max << endl;
                cout<<"Minimum :" << min << endl;	
            }
            if(a<b){
                max=b;
                min=a;
                cout<<"Maximun :" << max << endl;
                cout<<"Minimum :" << min << endl;
            }
        }
    getch();
    system("cls");
    goto start;

    return 0;
}