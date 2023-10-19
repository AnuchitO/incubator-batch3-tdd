package database

import "testing"

type fakeDB struct {
}

func TestInsert(t *testing.T) {
	mock := &fakeDB{}

	err := Insert(mock, "product", `{}`)

	if err != nil {
		t.Error(err.Error())
	}
}
