#include <iostream>
using namespace std;
int main()
{
    system("cls");
    int a, b, c, max;
    cout << "User input a :";
    cin >> a;
    cout << "User input b :";
    cin >> b;
    cout << "User input c :";
    cin >> c;
    if (a == b && a == c)
    {
        cout << "No Maximum :";
    }
    if (a != b && a != c && b != c){
        if (a > b){
            if (a > c){
                max = a;
                cout << "Maximum a>b -> is a:" << max;
            }
            if (a < c){
                max = c;
                cout << "Maximum a>b -> is b :" << max;
            }}
        if (a < b){
            if (b > c){
                max = b;
                cout << "Maximum a<b -> is b : " << max;
            }
            if (b < c){
                max = c;
                cout << "Maximum a<b -> is c :" << max;
            }
        }
    }
    if(a==b && b!=c){
        if(b>c){
            max = b;
        }
        if(b<c){
            max= c;
        }
        cout<<" Maximum is :"<<max;
    }
    if(a==c&&c!=b){
        if(c>b){
            max = c;
        }
        if(c<b){
            max = b;
        }
        cout<<"Maximum is :"<<max;
    }
    if(b==c&&c!=a){
        if(c>a){
            max = c;
        }
        if(c<a){
            max= a;
        }
        cout<<"Maximum is :"<<max;
    }

    return 0;
}
