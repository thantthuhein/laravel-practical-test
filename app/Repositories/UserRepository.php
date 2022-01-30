<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository implements Repository {
     public function __construct(User $user)
     {
          $this->user = $user;
     }

     public function create($data)
     {
          return $this->user->create($data);
     }

     public function find($id)
     {
          return $this->user->find($id);
     }
}