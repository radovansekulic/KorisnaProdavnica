<?php

namespace App\Repositories;

use App\Models\Order;

class OrderRepository
{
    private Order $repository;
    
    public function __construct()
    {
        $this->repository = new Order();
    }

    public function order($req)
    {
        return $this->repository->create([
            'name' => $req['name'],
            'email' => $req['email'],
            'product' => $req['product'],
            'phone' => $req['phone'],
            'adress' => $req['adress'],
            'price' => $req['price'],
        ]);
    }
}
