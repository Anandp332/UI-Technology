#include<iostream>
using namespace std;
int main(){
	int n;
	cin>>n;
	bool t=true;
	for(int i=2;i<n;i++){
		if(n%i==0){
			t=false;
		}
	}
	if(t){
		cout<<"no is prime "<<endl;

	}
	else{
		cout<<"no is not prime "<<endl;
	}
	return 0;
}