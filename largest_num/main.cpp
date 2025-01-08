#include<iostream>
using namespace std;

int main(){
    int num;
    cout << "Enter a number: ";
    cin >> num;
    if(num <= 0){
        cout << "Please enter a valid positive number"; 
    }
    int elements[100];
    for(int i=0; i<num; i++){
        cout << "Enter element " << i+1 << ": ";
        cin >> elements[i];
    }
    int largest = elements[0];
    for(int i = 1; i < num; i++){
        if(elements[i] > largest){
            largest = elements[i];
        }
    }
    cout << "The largest number in the array is: "<< largest <<endl;
    return 0;
}
