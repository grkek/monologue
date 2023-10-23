require "tilo"
require "random/secure"
require "./constants"

Log.setup(:debug)

GC.disable

# You can connect to the JavaScript engine for debugging and as such.
puts "JavaScript engine running at: #{Tilo::JavaScript::Engine.instance.path}"

Tilo::JavaScript::Engine.instance.sandbox.push_global_proc("Cryptography__RandomBytes", 1) do |ptr|
  env = Duktape::Sandbox.new ptr

  length = env.require_number 0

  begin
    env.push_string Random::Secure.hex length.to_i32
    env.call_success
  rescue exception : Exception
    Log.error(exception: exception) { exception.message }
    env.call_failure
  end
end

builder = Tilo::Builder.new(content_directory: Constants::CONTENT_DIRECTORY)
builder.build
