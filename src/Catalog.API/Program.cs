using Asp.Versioning.Builder;

var builder = WebApplication.CreateBuilder(args);

builder.AddServiceDefaults();
builder.AddApplicationServices();
builder.Services.AddProblemDetails();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "test",
                      policy =>
                      {
                          policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
                      });
});
var withApiVersioning = builder.Services.AddApiVersioning();

builder.AddDefaultOpenApi(withApiVersioning);

var app = builder.Build();
app.UseCors("test");
app.MapDefaultEndpoints();

app.NewVersionedApi("Catalog")
   .MapCatalogApiV1();

app.UseDefaultOpenApi();
app.Run();
